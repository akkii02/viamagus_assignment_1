import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import SkeletonLoader from './SkeletonLoader'; 
import styles from './CreatePost.module.css'; 

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function CreatePost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title) {
      setError('Title is required.');
      return;
    }
    if (description.length > 1000) {
      setError('Description cannot exceed 1000 characters.');
      return;
    }
    setError(null);
    setLoading(true); 

    try {
      await axios.post(API_URL, { title, body: description });
      setSuccess(true);
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      setError('Failed to create post.');
    } finally {
      setLoading(false); 
    }
  };

  if (loading) {
    return <SkeletonLoader />; 
  }

  return (
    <div className={styles.createPost}>
      <h1>Create New Post</h1>
      {success && <p className={styles.success}>Post created successfully! Redirecting...</p>}
      {error && <p className={styles.error}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            maxLength={1000}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CreatePost;
