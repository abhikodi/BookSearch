import React from 'react';

function BookDetails({ book }) {
  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Language:</strong> {book.language}</p>
      <p><strong>Rating:</strong> {book.rating}</p>
      <p><strong>Publication Year:</strong> {book.publication_year}</p>
    </div>
  );
}

export default BookDetails;
