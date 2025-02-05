import BlogPost from "./blogPost";

function Blog() {
  return (
    <div className="bg-gray-100 min-h-screen dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="bg-blue-500 p-4 text-white text-center">
        <h1 className="text-4xl font-bold">Mi Blog</h1>
        <p className="mt-2">Bienvenido a mi blog personal</p>
      </header>

      <BlogPost />
    </div>
  );
}

export default Blog;
