import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SkeletonLoader from './SkeletonLoader'; 
import styles from './PostList.module.css'; 

const API_URL = 'https://jsonplaceholder.typicode.com/posts';
function PostList() {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchPosts = async (page) => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get(`${API_URL}?_start=${page * 10}&_limit=10`);
      setPosts(response.data);
    } catch (err) {
      setError('Failed to fetch posts.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  if (loading) {
    return <SkeletonLoader />; 
  }

  return (
    <div className={styles.postList}>
      <h1>Post List</h1>
      {error && <p className={styles.error}>{error}</p>}
      <ul>
        {posts.map((post) => (
          <li key={post.id} className={styles.postCard}>
            <Link to={`/posts/${post.id}`} className={styles.postLink}>
              <h2>{post.title}</h2>
              <p>{post.body.length > 100 ? post.body.substring(0, 100) + '...' : post.body}</p>
            </Link>
          </li>
        ))}
      </ul>
      <div className={styles.pagination}>
        <button onClick={() => setPage((prev) => Math.max(prev - 1, 0))} disabled={page === 0}>
          Previous
        </button>
        <button onClick={() => setPage((prev) => prev + 1)}>Next</button>
      </div>
    </div>
  );
}


export default PostList;
