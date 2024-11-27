import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import BookDetails from '../components/BookDetails';
import ReviewForm from '../components/ReviewForm';

function BookPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`/api/books/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data));
  }, [id]);

  const handleReviewSubmit = (review) => {
    fetch('/api/submit_review', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(review),
    });
  };

  return (
    <div>
      <BookDetails book={book} />
      <ReviewForm bookId={id} onSubmit={handleReviewSubmit} />
    </div>
  );
}

export default BookPage;
