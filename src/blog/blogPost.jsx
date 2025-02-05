import React, { useEffect, useState } from "react";
import Post from "./post";

// Esta función simula la carga del archivo Markdown
const loadMarkdown = async () => {
  // Esta es una forma de cargar el contenido Markdown.
  // En un entorno de desarrollo, puedes usar fetch o importar directamente el archivo de markdown.
  const response = await fetch("/alejocarreteroweb/src/posts/post1.md");
  return await response.text();
};

function BlogPost() {
  const [content, setContent] = useState("");

  useEffect(() => {
    loadMarkdown().then((text) => setContent(text));
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Mi Primer Post</h1>
      <Post content={content} />
    </div>
  );
}


export default BlogPost;
