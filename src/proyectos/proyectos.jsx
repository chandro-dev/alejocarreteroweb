import React from "react";
import { motion } from "framer-motion";
import { FaStar, FaCodeBranch, FaExternalLinkAlt, FaSearch } from "react-icons/fa";

/**
 * ProjectsPage — Página dedicada a mostrar proyectos del usuario de GitHub
 *
 * Características:
 * - Lee primero /projects.json (si usas GitHub Actions). Si no existe o viene vacío, 
 *   hace fallback automático a la REST API pública de GitHub.
 * - Búsqueda, filtro por lenguaje, orden (actualizado, stars, nombre), paginación y toggle "Solo con Live".
 * - Tarjetas con métricas y enlaces a Código / Live.
 * - Sin tokens en producción (seguro para GitHub Pages). 1 llamada a la API si no hay projects.json.
 *
 * Uso:
 *   <ProjectsPage username="alejocarretero" pageSize={9} />
 */

const GH_API = "https://api.github.com";

async function safeFetchJson(url, opts) {
  try {
    const res = await fetch(url, opts);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

function timeAgo(iso) {
  if (!iso) return "";
  const diff = Date.now() - new Date(iso).getTime();
  const s = Math.floor(diff / 1000);
  const m = Math.floor(s / 60);
  const h = Math.floor(m / 60);
  const d = Math.floor(h / 24);
  if (d > 0) return `${d}d`;
  if (h > 0) return `${h}h`;
  if (m > 0) return `${m}m`;
  return `${s}s`;
}

function normalizeFromJson(x) {
  // Soporta tanto el formato de projects.json (server-side) como REST (client-side)
  return {
    name: x.name || x.title || "",
    description: x.description || "",
    html_url: x.html_url || x.url || "",
    homepage: x.homepage || x.live || "",
    stargazers_count: x.stargazers_count ?? x.stars ?? 0,
    forks_count: x.forks_count ?? x.forks ?? 0,
    language: x.language || (Array.isArray(x.languages) && x.languages[0]) || null,
    updated_at: x.updated_at || x.updatedAt || null,
    archived: !!x.archived,
    topics: Array.isArray(x.topics) ? x.topics : [],
  };
}

async function loadProjects({ username }) {
  // 1) Intento local /projects.json (respetando el base path de Vite/GitHub Pages)
  const base = (import.meta.env?.BASE_URL ?? "/").replace(/\/+$/, "/");
  const localUrl = `${base}projects.json`;
  const local = await safeFetchJson(localUrl, { cache: "no-store" });
  let list = Array.isArray(local) ? local.map(normalizeFromJson) : [];

  // 2) Fallback a REST si está vacío
  if (!list.length && username) {
    const repos = await safeFetchJson(`${GH_API}/users/${username}/repos?per_page=100&sort=updated`, {
      headers: { Accept: "application/vnd.github+json" },
    });
    list = Array.isArray(repos)
      ? repos
          .filter((r) => !r.fork)
          .map(normalizeFromJson)
      : [];
  }
  return list;
}

function useProjects(username) {
  const [state, setState] = React.useState({ loading: true, error: null, items: [] });

  React.useEffect(() => {
    let alive = true;
    setState({ loading: true, error: null, items: [] });
    loadProjects({ username })
      .then((items) => alive && setState({ loading: false, error: null, items }))
      .catch((e) => alive && setState({ loading: false, error: e.message, items: [] }));
    return () => {
      alive = false;
    };
  }, [username]);

  return state;
}

function Toolbar({ query, setQuery, language, setLanguage, onlyLive, setOnlyLive, sortBy, setSortBy, languages }) {
  return (
    <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-white/40 dark:border-white/10 rounded-2xl p-4 flex flex-col md:flex-row gap-3 items-stretch md:items-center">
      <div className="flex-1 relative">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar por nombre o descripción…"
          className="w-full pl-10 pr-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        />
      </div>

      <select
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
        className="px-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
      >
        <option value="">Todos los lenguajes</option>
        {languages.map((l) => (
          <option key={l} value={l}>
            {l}
          </option>
        ))}
      </select>

      <select
        value={sortBy}
        onChange={(e) => setSortBy(e.target.value)}
        className="px-3 py-2 rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-700"
      >
        <option value="updated_desc">Actualizado ↓</option>
        <option value="stars_desc">Stars ↓</option>
        <option value="name_asc">Nombre A→Z</option>
      </select>

      <label className="inline-flex items-center gap-2 text-sm">
        <input type="checkbox" checked={onlyLive} onChange={(e) => setOnlyLive(e.target.checked)} />
        Solo con Live
      </label>
    </div>
  );
}

function RepoCard({ p }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-white/40 dark:border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all"
    >
      <header className="flex items-start justify-between gap-3">
        <a href={p.html_url} target="_blank" rel="noreferrer" className="text-lg font-semibold hover:underline">
          {p.name}
        </a>
        <div className="text-sm text-gray-500 whitespace-nowrap flex items-center gap-3">
          <span className="inline-flex items-center gap-1" title="Stars">
            <FaStar /> {p.stargazers_count}
          </span>
          <span className="inline-flex items-center gap-1" title="Forks">
            <FaCodeBranch /> {p.forks_count}
          </span>
        </div>
      </header>

      {p.description && <p className="text-gray-600 dark:text-gray-300 mt-2">{p.description}</p>}

      <div className="flex items-center justify-between mt-4">
        <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-600">
          {p.language || "Otro"}
        </span>
        <span className="text-xs text-gray-500">act. {timeAgo(p.updated_at)}</span>
      </div>

      <div className="mt-5 flex gap-2">
        <a
          href={p.html_url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:scale-[1.02] active:scale-[0.99] transition"
        >
          Código <FaExternalLinkAlt className="opacity-70" />
        </a>
        {p.homepage && (
          <a
            href={p.homepage}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
          >
            Live <FaExternalLinkAlt className="opacity-70" />
          </a>
        )}
      </div>
    </motion.article>
  );
}

export default function ProjectsPage({ username = "chandro-dev", pageSize = 9 }) {
  const { loading, error, items } = useProjects(username);

  // Filtros y estado UI
  const [query, setQuery] = React.useState("");
  const [language, setLanguage] = React.useState("");
  const [onlyLive, setOnlyLive] = React.useState(false);
  const [sortBy, setSortBy] = React.useState("updated_desc");
  const [page, setPage] = React.useState(1);

  React.useEffect(() => setPage(1), [query, language, onlyLive, sortBy]);

  const languages = React.useMemo(() => {
    const set = new Set(items.map((x) => x.language).filter(Boolean));
    return Array.from(set).sort((a, b) => a.localeCompare(b));
  }, [items]);

  const filtered = React.useMemo(() => {
    const q = query.trim().toLowerCase();
    let arr = items.filter((p) => !p.archived);
    if (q) arr = arr.filter((p) => (p.name?.toLowerCase().includes(q) || p.description?.toLowerCase().includes(q)));
    if (language) arr = arr.filter((p) => p.language === language);
    if (onlyLive) arr = arr.filter((p) => !!p.homepage);

    switch (sortBy) {
      case "stars_desc":
        arr = arr.sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0));
        break;
      case "name_asc":
        arr = arr.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        arr = arr.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
    }

    return arr;
  }, [items, query, language, onlyLive, sortBy]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const pageItems = filtered.slice((page - 1) * pageSize, page * pageSize);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-950 dark:to-gray-900 text-gray-900 dark:text-white px-6 py-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.header initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }} className="mb-6">
          <h1 className="text-3xl md:text-4xl font-extrabold">Proyectos</h1>
          <p className="text-gray-600 dark:text-gray-300 mt-2">Explora mis repos públicos, filtra por lenguaje y ordena por actividad o popularidad.</p>
        </motion.header>

        {/* Toolbar */}
        <Toolbar
          query={query}
          setQuery={setQuery}
          language={language}
          setLanguage={setLanguage}
          onlyLive={onlyLive}
          setOnlyLive={setOnlyLive}
          sortBy={sortBy}
          setSortBy={setSortBy}
          languages={languages}
        />

        {/* Content */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {Array.from({ length: pageSize }).map((_, i) => (
              <div key={i} className="h-40 animate-pulse bg-gray-200/60 dark:bg-gray-800/60 rounded-2xl" />
            ))}
          </div>
        )}

        {error && (
          <div className="mt-6 p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
            No se pudieron cargar proyectos. <span className="font-mono">{String(error)}</span>
          </div>
        )}

        {!loading && !error && (
          <>
            {filtered.length === 0 ? (
              <p className="mt-8 text-sm text-gray-500">No hay proyectos que coincidan con los filtros.</p>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                {pageItems.map((p, idx) => (
                  <RepoCard key={`${p.html_url}-${idx}`} p={p} />
                ))}
              </div>
            )}

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 mt-8">
                <button
                  onClick={() => setPage((n) => Math.max(1, n - 1))}
                  disabled={page === 1}
                  className="px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 disabled:opacity-50"
                >
                  Anterior
                </button>
                <span className="text-sm text-gray-600 dark:text-gray-300">
                  Página {page} de {totalPages}
                </span>
                <button
                  onClick={() => setPage((n) => Math.min(totalPages, n + 1))}
                  disabled={page === totalPages}
                  className="px-3 py-1.5 rounded-lg border border-gray-300 dark:border-gray-600 disabled:opacity-50"
                >
                  Siguiente
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
