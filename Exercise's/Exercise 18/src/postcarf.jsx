import React, { useState, useEffect } from 'react';

const PostContainer = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => setPosts(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div className="post-container bg-gray-600">
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

const PostCard = ({ post }) => {
  return (
    <div className="post-card border m-2 p-2 bg-blue-400">
      <h2 className="text-3xl text-red-500 p-2 font-bold">{post.title}</h2>
      <p className='p-2 font-bold'>{post.body}</p>
    </div>
  );
};

export default PostContainer;
