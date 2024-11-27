import React from 'react';
import { Link } from 'react-router-dom';

function BookList({ books }) {
  return (
    <div style={{ padding: '20px' }}>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <Link to={`/book/${book.id}`}>{book.title} by {book.author}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;
