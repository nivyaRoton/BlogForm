import BlogList from './components/BlogList';
import AddBlog from './components/AddBlog';
import { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const [blogs, setBlogs] = useState(() => JSON.parse(localStorage.getItem('blogs')) || []);

  useEffect(() => {
    localStorage.setItem('blogs', JSON.stringify(blogs));
  }, [blogs]);

  function deleteBlog(id) {
    const newBlogs = blogs.filter((blog) => {
      return blog.id !== id;
    });

    setBlogs(newBlogs);
  }

  function addBlog(blog) {
    setBlogs([...blogs, blog]);
  }
  return (
    <div>
      <AddBlog addBlog={addBlog} />
      <br/><br/>
      <BlogList blogs={blogs} deleteBlog={deleteBlog} />
      
    </div>
  );
}
export default App;