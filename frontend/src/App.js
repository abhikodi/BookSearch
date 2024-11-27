import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import BookPage from './pages/BookPage';
import WishlistPage from './pages/WishlistPage';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation Bar */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/wishlist">Wishlist</Link></li>
            <li><Link to="/book/1">Book Page</Link></li>
          </ul>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/book/:id" element={<BookPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
