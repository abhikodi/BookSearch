import React, { useEffect, useState } from 'react';

function Wishlist({ user }) {
    const [wishlists, setWishlists] = useState([]);

    useEffect(() => {
        fetch(`/api/wishlist?user=${user}`)
            .then(response => response.json())
            .then(data => setWishlists(data));
    }, [user]);

    return (
        <div style={{ padding: '20px' }}>
            <h2>Your Wishlists</h2>
            {wishlists.length === 0 ? (
                <p>No items in your wishlist yet.</p>
            ) : (
                wishlists.map(wishlist => (
                    <div key={wishlist.id}>
                        <h3>{wishlist.name}</h3>
                        <ul>
                            {wishlist.books.map(book => (
                                <li key={book.id}>
                                    {book.title} by {book.author}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))
            )}
        </div>
    );
}

export default Wishlist;
