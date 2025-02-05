import ReactMarkdown from "react-markdown";
import './post.css'
function Post({ content }) {
  return (
    <div className="prose dark:prose-dark max-w-none mx-auto">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
}

export default Post;