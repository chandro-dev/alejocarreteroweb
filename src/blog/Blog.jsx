import React from 'react';
import ReactMarkdown from 'react-markdown';
import post1 from '../posts/post1.md';

const Blog = () => {
  const [content, setContent] = React.useState('');

  React.useEffect(() => {
    fetch(post1)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <div className="blog-container">
      <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  );
};

export default Blog;