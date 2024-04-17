import React from 'react';
import { Link } from 'react-router-dom';
import './ActivityCard.css';

const ActivityCard = ({ activity }) => {
  const { _id, name, description, imageURL, price, destination } = activity;

  return (
    <div className="activity-card">
      <Link to={`/activity/${_id}`}>
        <img src={`images/${imageURL}`} alt={name} />
      </Link>
      <div className="activity-details">
        <Link to={`/activity/${_id}`}>
          <h3>{name}</h3>
        </Link>
        <p>{description}</p>
        <p>Price: ${price}</p>
        <p>Destination: {destination}</p>
      </div>
    </div>
  );
};

export default ActivityCard;
