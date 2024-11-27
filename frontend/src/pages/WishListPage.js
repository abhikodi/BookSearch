import React, { useEffect, useState } from 'react';

function WishlistPage() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetch('/api/wishlist')
      .then((response) => response.json())
      .then((data) => setWishlist(data));
  }, []);

  return (
    <div>
      <header>
        <h1>Your Wishlist</h1>
      </header>
      <ul>
        {wishlist.map((book) => (
          <li key={book.id}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
}

export default WishlistPage;
