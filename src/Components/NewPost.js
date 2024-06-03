import React, { useState } from 'react';

const NewPost = () => {
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('content', content);
    if (image) formData.append('image', image);

    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        body: formData,
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h2>New Post</h2>
      <form onSubmit={handleSubmit}>
        <textarea placeholder="Write something..." value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Post</button>
      </form>
    </div>
  );
};

export default NewPost;