
import React from 'react';

const StarRating = ({ rating }) => {
  const stars = [1, 2, 3, 4, 5]; // Rating scale: 1 to 5
  
  return (
    <div className="star-rating">
      {stars.map((star) => (
        <span
          key={star}
          className={`star ${star <= rating ? 'filled' : ''}`} 
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;

