import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:8000/api/posts/${id}/`);
        if (!response.ok) {
          throw new Error('Post no encontrado');
        }
        const data = await response.json();
        setPost(data);
        setError(null);
      } catch (error: any) {
        setPost(null);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (post === null) {
    return <div>Post no encontrado</div>;
  }

  return (
    <div className="container">
      <h1><strong>Título:</strong> {post.title}</h1>
      <p><strong>Contenido:</strong> {post.content}</p>
      <p><strong>Autor:</strong> {post.author}</p>
    </div>
  );
};

export default PostDetail;
