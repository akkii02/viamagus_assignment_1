import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import styles from './PostDetail.module.css'; 
import SkeletonLoader from './SkeletonLoader'; 

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

function PostDetail() {
  const { postId } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`${API_URL}/${postId}`);
        setPost(response.data);
      } catch (err) {
        setError('Failed to fetch post details.');
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [postId]);

  if (loading) {
    return <SkeletonLoader />; 
  }

  if (error) {
    return <p className={styles.error}>{error}</p>;
  }

  if (!post) return null;

  return (
    <div className={styles.postDetail}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <Link to="/" className={styles.backLink}>Back to List</Link>
    </div>
  );
}

export default PostDetail;
