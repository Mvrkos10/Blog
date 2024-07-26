import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import PostCreate from './components/PostCreate';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/posts/create" element={<PostCreate />} />
      </Routes>
    </Router>
  );
};

export default App;
