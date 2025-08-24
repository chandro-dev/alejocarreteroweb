// React‑only GitHub widgets — repos, commits y stats (sin Actions ni backend)
// Copia este archivo y exporta los componentes que necesites.
// Uso mínimo:
//   <GitHubStats username="alejocarretero" />
//   <RecentCommits username="alejocarretero" />
//   <ProjectsGrid username="alejocarretero" max={6} />

import React from 'react';

// =========================
// util: fetch GitHub (REST)
// =========================
const GH_API = 'https://api.github.com';
// Si quieres (bajo tu responsabilidad) puedes inyectar un token en build.
// Omitelo en producción pública para no exponerlo.
const GH_TOKEN = import.meta?.env?.VITE_GITHUB_TOKEN

async function ghFetch(path) {
  const res = await fetch(`${GH_API}${path}`, {
    headers: {
      Accept: 'application/vnd.github+json',
      ...(GH_TOKEN ? { Authorization: `Bearer ${GH_TOKEN}` } : {}),
    },
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(`GitHub ${res.status}: ${text}`);
  }
  return res.json();
}

// =========================
// hook: datos públicos
// =========================
function useGithubPublicData(username, { includeForks = false, maxRepos = 100 } = {}) {
  const [state, setState] = React.useState({ loading: true, error: null, repos: [], events: [] });

  React.useEffect(() => {
    let alive = true;
    async function run() {
      setState((s) => ({ ...s, loading: true, error: null }));
      try {
        // 1) repos públicos del usuario (1 llamada)
        const repos = await ghFetch(`/users/${username}/repos?per_page=${maxRepos}&sort=updated`);
        const filtered = (repos || [])
          .filter((r) => (includeForks ? true : !r.fork))
          .map((r) => ({
            name: r.name,
            full_name: r.full_name, // owner/name
            description: r.description,
            html_url: r.html_url,
            homepage: r.homepage,
            stargazers_count: r.stargazers_count || 0,
            forks_count: r.forks_count || 0,
            language: r.language,
            updated_at: r.updated_at,
            archived: r.archived,
          }));

        // 2) eventos públicos (1 llamada) → PushEvent / PullRequestEvent / IssuesEvent
        const events = await ghFetch(`/users/${username}/events/public?per_page=100`);

        if (!alive) return;
        setState({ loading: false, error: null, repos: filtered, events });
      } catch (e) {
        if (!alive) return;
        setState({ loading: false, error: e.message, repos: [], events: [] });
      }
    }
    run();
    return () => { alive = false; };
  }, [username, includeForks, maxRepos]);

  return state;
}

// =========================
// derive: stats importantes
// =========================
function deriveStats(repos, events) {
  const totalStars = repos.reduce((a, r) => a + (r.stargazers_count || 0), 0);
  const totalForks = repos.reduce((a, r) => a + (r.forks_count || 0), 0);
  const publicRepos = repos.length;

  // Lenguajes (aprox. por primary language del repo)
  const langMap = new Map();
  for (const r of repos) {
    if (!r.language) continue;
    langMap.set(r.language, (langMap.get(r.language) || 0) + 1);
  }
  const topLanguages = Array.from(langMap.entries())
    .map(([name, count]) => ({ name, count }))
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  // Ventana 30 días
  const now = Date.now();
  const THIRTY_D = 1000 * 60 * 60 * 24 * 30;
  let commits30 = 0, prs30 = 0, issues30 = 0;
  const recentEvents = (events || []).filter((e) => now - new Date(e.created_at).getTime() <= THIRTY_D);
  for (const e of recentEvents) {
    if (e.type === 'PushEvent') commits30 += (e.payload?.commits?.length || 0);
    if (e.type === 'PullRequestEvent') prs30 += 1;
    if (e.type === 'IssuesEvent') issues30 += 1;
  }

  return { totalStars, totalForks, publicRepos, topLanguages, commits30, prs30, issues30 };
}

// =========================
// util: formateos
// =========================
const timeAgo = (iso) => {
  const diff = Date.now() - new Date(iso).getTime();
  const s = Math.floor(diff / 1000);
  const m = Math.floor(s / 60);
  const h = Math.floor(m / 60);
  const d = Math.floor(h / 24);
  if (d > 0) return `${d}d`;
  if (h > 0) return `${h}h`;
  if (m > 0) return `${m}m`;
  return `${s}s`;
};

// =========================
// componente: Stats
// =========================
export function GitHubStats({ username }) {
  const { loading, error, repos, events } = useGithubPublicData(username);
  const stats = React.useMemo(() => deriveStats(repos, events), [repos, events]);

  if (loading) return <div className="animate-pulse h-40 bg-gray-200/60 dark:bg-gray-800/60 rounded-2xl" />;
  if (error) return (
    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
      No se pudieron cargar los datos de GitHub. <span className="font-mono">{error}</span>
    </div>
  );

  const kpis = [
    { label: '⭐ Stars', value: stats.totalStars },
    { label: '🍴 Forks', value: stats.totalForks },
    { label: '📦 Repos', value: stats.publicRepos },
    { label: '🟩 Commits (30d)', value: stats.commits30 },
    { label: '🔀 PRs (30d)', value: stats.prs30 },
    { label: '❗ Issues (30d)', value: stats.issues30 },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto mt-12">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {kpis.map((k) => (
          <div key={k.label} className="text-center bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-2xl p-5 border border-white/40 dark:border-white/10">
            <div className="text-2xl md:text-3xl font-extrabold">{k.value}</div>
            <div className="mt-1 text-gray-600 dark:text-gray-300 text-sm">{k.label}</div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-3">Lenguajes principales</h3>
        <div className="flex flex-wrap gap-2">
          {stats.topLanguages.length === 0 && (
            <span className="text-sm text-gray-500">Sin lenguajes detectados aún.</span>
          )}
          {stats.topLanguages.map((l) => (
            <span key={l.name} className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-600">
              {l.name} · {l.count}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

// =========================
// componente: Commits recientes
// =========================
export function RecentCommits({ username, limit = 12 }) {
  const { loading, error, events } = useGithubPublicData(username);

  if (loading) return <div className="animate-pulse h-28 bg-gray-200/60 dark:bg-gray-800/60 rounded-2xl" />;
  if (error) return null;

  // Extrae commits de PushEvent
  const commits = [];
  for (const e of events) {
    if (e.type !== 'PushEvent') continue;
    const repo = e.repo?.name; // 'owner/repo'
    for (const c of e.payload?.commits || []) {
      commits.push({
        repo,
        sha: c.sha,
        message: (c.message || '').split('\n')[0],
        date: e.created_at,
        url: `https://github.com/${repo}/commit/${c.sha}`,
      });
    }
  }
  commits.sort((a,b) => new Date(b.date) - new Date(a.date));
  const items = commits.slice(0, limit);

  return (
    <section className="w-full max-w-6xl mx-auto mt-12">
      <h3 className="text-xl font-semibold mb-4">Commits recientes</h3>
      {items.length === 0 && <p className="text-sm text-gray-500">Sin actividad pública reciente.</p>}
      <ul className="space-y-3">
        {items.map((c) => (
          <li key={`${c.repo}-${c.sha}`} className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-md rounded-xl p-4 border border-white/40 dark:border-white/10">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <a href={c.url} target="_blank" rel="noreferrer" className="font-medium hover:underline">
                {c.message || 'Commit'}
              </a>
              <span className="text-xs text-gray-500">{timeAgo(c.date)} · {c.repo}</span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

// =========================
// componente: Grid de proyectos (repos)
// =========================
export function ProjectsGrid({ username, max = 6 }) {
  const { loading, error, repos } = useGithubPublicData(username);

  if (loading) return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
    {Array.from({length: max}).map((_,i)=> (
      <div key={i} className="h-40 animate-pulse bg-gray-200/60 dark:bg-gray-800/60 rounded-2xl" />
    ))}
  </div>;

  if (error) return (
    <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm">
      No se pudieron cargar repositorios. <span className="font-mono">{error}</span>
    </div>
  );

  const items = [...repos]
    .filter((r) => !r.archived)
    .sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at))
    .slice(0, max);

  return (
    <section className="w-full max-w-6xl mx-auto mt-12">
      <h3 className="text-2xl font-semibold mb-6 text-center">Últimos Proyectos</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p) => (
          <article key={p.full_name} className="group bg-white/70 dark:bg-gray-800/70 backdrop-blur-md border border-white/40 dark:border-white/10 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all">
            <header className="flex items-start justify-between gap-3">
              <a href={p.html_url} target="_blank" rel="noreferrer" className="text-lg font-semibold hover:underline">
                {p.name}
              </a>
              <div className="text-sm text-gray-500 whitespace-nowrap">⭐ {p.stargazers_count} · 🍴 {p.forks_count}</div>
            </header>

            {p.description && (
              <p className="text-gray-600 dark:text-gray-300 mt-2 line-clamp-3">{p.description}</p>
            )}

            <div className="flex items-center justify-between mt-4">
              <span className="text-xs px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-100 border border-gray-200 dark:border-gray-600">
                {p.language || 'Otro'}
              </span>
              <span className="text-xs text-gray-500">act. {timeAgo(p.updated_at)}</span>
            </div>

            <div className="mt-5 flex gap-2">
              <a href={p.html_url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl bg-gray-900 text-white dark:bg-white dark:text-gray-900 hover:scale-[1.02] active:scale-[0.99] transition">
                Código
              </a>
              {p.homepage && (
                <a href={p.homepage} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-2 rounded-xl border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">
                  Live
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
