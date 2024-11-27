import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    fetch(`/api/search_books?query=${query}`)
      .then((response) => response.json())
      .then((data) => onSearch(data));
  };

  return (
    <div style={{ margin: '20px', textAlign: 'center' }}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for books..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;
