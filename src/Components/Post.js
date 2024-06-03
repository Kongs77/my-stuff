import React from 'react';

const Post = ({ post }) => {
  return (
    <div>
      <p>{post.content}</p>
      {post.image && <img src={post.image} alt="Post" />}
      <button>Like</button>
      <button>Share</button>
      <div>
        <h4>Comments</h4>
        {post.comments.map((comment, index) => (
          <p key={index}>{comment}</p>
        ))}
      </div>
    </div>
  );
};

export default Post;