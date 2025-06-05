import React, { useState } from 'react';
import './BookRecommendations.css';

const allBooks = [
  {
    title: 'HTML & CSS: Design and Building',
    author: 'Jon Duckett',
    image: require('./images/book1.png'),
    status: 'Available',
  },
  {
    title: 'Calculus Made Easy',
    author: 'Silvanus',
    image: require('./images/book2.png'),
    status: 'Available',
  },
  {
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    image: require('./images/book3.png'),
    status: 'Available',
  },
  {
    title: 'Clean Code',
    author: 'Robert C. Martin',
    image: require('./images/book4.png'),
    status: 'Available',
  },
  {
    title: 'Eloquent JavaScript',
    author: 'Marijn Haverbeke',
    image: require('./images/book5.png'),
    status: 'Available',
  },
  {
    title: 'Atomic Habits',
    author: 'James Clear',
    image: require('./images/book6.png'),
    status: 'Available',
  },
];

function getRandomBooks(count = 4) {
  const shuffled = [...allBooks].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

const BookRecommendations = () => {
  const [recommendedBooks, setRecommendedBooks] = useState(getRandomBooks());

  const handleRefresh = () => {
    setRecommendedBooks(getRandomBooks());
  };

  return (
    <div className="book-recommendation-page">
      <div className="recommendation-container">
        <div className="recommendation-header">
          <h2>Recommended for You</h2>
          <button className="refresh-btn" onClick={handleRefresh}>
            Refresh
          </button>
        </div>

        <div className="book-grid">
          {recommendedBooks.map((book, index) => (
            <div className="book-card" key={index}>
              <img src={book.image} alt={book.title} />
              <div className="book-info">
                <h4>{book.title}</h4>
                <p>{book.author}</p>
                <span className="available">{book.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookRecommendations;
