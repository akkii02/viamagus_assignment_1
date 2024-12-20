import React from 'react';
import styles from './SkeletonLoader.module.css'; 

function SkeletonLoader() {
  return (
    <div className={styles.loadingContainer}>
      <div className={styles.skeleton}></div>
      <div className={styles.skeleton}></div>
      <div className={styles.skeleton}></div>
    </div>
  );
}

export default SkeletonLoader;
