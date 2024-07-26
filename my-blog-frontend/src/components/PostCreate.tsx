import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PostCreate: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    fetch('http://localhost:8000/api/posts/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, content, author }),
    })
      .then(response => response.json())
      .then(data => {
        navigate(`/posts/${data.id}`);
      })
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="container">
      <h1>Crear Nueva Publicación</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Contenido:</label>
          <textarea value={content} onChange={e => setContent(e.target.value)} required></textarea>
        </div>
        <div>
          <label>Autor:</label>
          <input type="text" value={author} onChange={e => setAuthor(e.target.value)} required />
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default PostCreate;
