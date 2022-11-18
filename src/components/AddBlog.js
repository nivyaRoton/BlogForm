import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

const AddBlog = ({addBlog}) => {
  const [content, setContent] = useState('');
  const [title,setTitle]=useState('');
  const [img, setImg] = useState();
  // const toast = useToast();
  const [show, setShow] = useState(false);
const handleClose = () => setShow(false);
const handleShow = () => setShow(true);
const onImageChange = (e) => {
  const [file] = e.target.files;
  setImg(URL.createObjectURL(file));
};
  function handleSubmit(e) {
    e.preventDefault();

    

    const blog = {
      id: nanoid(),
      heading:title,
      body: content,
      image:img
    };

    addBlog(blog);
    setContent('');
    setTitle('');
    setImg();
  }
  
  return (
    <>
    <Button  variant="dark" onClick={handleShow}>
        Add Blog
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='theme'>
          <Modal.Title>Add</Modal.Title>
        </Modal.Header>
        <Modal.Body>
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Title</Form.Label>
      
        <Form.Control variant='filled' placeholder='Enter Title' value={title} onChange={(e) => setTitle(e.target.value)} /><br/>
        <Form.Label>Content</Form.Label>
        <Form.Control variant='filled' placeholder='Enter Content' value={content} onChange={(e) => setContent(e.target.value)} /><br/>
        <Form.Label>Image</Form.Label>
        <input type="file" onChange={onImageChange} />
        <Stack direction="horizontal" gap={3} className='mt-3'>
        <Button type='submit'  variant="dark" px='8'>Add Todo</Button>
        <Button  variant="dark" onClick={handleClose}>
            Close
          </Button>
          </Stack>
          </Form.Group>
        </Form>
    
    </Modal.Body>
      </Modal>
    </>
  );
}
export default AddBlog;