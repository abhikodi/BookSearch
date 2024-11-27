import React, { useState } from 'react';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';

function HomePage() {
  const [books, setBooks] = useState([]);

  const handleSearch = (data) => {
    setBooks(data);
  };

  return (
    <div>
      <header>
        <h1>Book Recommendation Engine</h1>
      </header>
      <SearchBar onSearch={handleSearch} />
      <BookList books={books} />
    </div>
  );
}

export default HomePage;
