import React, { useState } from 'react';

function ReviewForm({ bookId, onSubmit }) {
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ bookId, content, rating });
    setContent('');
    setRating(1);
  };

  return (
    <form onSubmit={handleSubmit}>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="Write your review..."
      />
      <select value={rating} onChange={(e) => setRating(e.target.value)}>
        {[1, 2, 3, 4, 5].map((num) => (
          <option key={num} value={num}>{num}</option>
        ))}
      </select>
      <button type="submit">Submit Review</button>
    </form>
  );
}

export default ReviewForm;
