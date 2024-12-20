import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostList from './components/PostList';
import CreatePost from './components/CreatePost';
import PostDetail from './components/PostDetail';
import Navbar from './components/Navbar';  
import './App.css';

function App() {
  return (
    <Router>
      <Navbar /> 
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/posts/:postId" element={<PostDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
