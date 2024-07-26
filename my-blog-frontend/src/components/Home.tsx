import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="container">
      <h1>Bienvenido al Blog</h1>
      <p>
        <Link to="/posts">Ver publicaciones</Link>
      </p>
      <p>
        <Link to="/posts/create">Crear una publicación</Link>
      </p>
    </div>
  );
};

export default Home;
  