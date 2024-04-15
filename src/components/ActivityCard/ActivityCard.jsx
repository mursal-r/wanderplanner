import './ActivityCard.css'

export default function ActivityCard({ activity }) {
    const { name, description, imageURL, price, destination } = activity;
  
    return (
      <div className="activity-card">
        <img src={imageURL} alt={name} />
        <div className="activity-details">
          <h3>{name}</h3>
          <p>{description}</p>
          <p>Price: ${price}</p>
          <p>Destination: {destination}</p>
        </div>
      </div>
    );
  };