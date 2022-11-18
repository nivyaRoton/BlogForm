import React from 'react';
// import DeleteIcon from '@mui/icons-material/Delete';
import DeleteIcon from '@mui/icons-material/Delete'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './BlogList.css';
// import Stack from 'react-bootstrap/Stack';
const BlogList = ({blogs, deleteBlog}) => {
  if(!blogs.length) {
    return(
      <div>
        Enter New Task 👇
      </div>
    );
  }
  
  return (
    <>
    {blogs.map(blog => (
       
       <Card style={{ width: '18rem' }}>
                 <Card.Img src={blog.image} alt="Card image"/>
  
        <Card.ImgOverlay>
      <div key={blog.id} className='text-white'>
      <div className='overlay'>
        <Card.Title>{blog.heading}</Card.Title>
    
        <Card.Text>{blog.body}</Card.Text>
        <div className='del-btn'>
        <Button onClick={() => deleteBlog(blog.id)}  variant="outline-light"  >
        <DeleteIcon />
        </Button>
        </div>
        </div>
      </div>
      
      </Card.ImgOverlay>
      </Card>
     

    ))}
     </>

  );
}

export default BlogList;
