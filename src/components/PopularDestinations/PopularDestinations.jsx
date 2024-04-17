import React from 'react';
import { Link } from 'react-router-dom';
import './PopularDestinations.css';
import ActivityCard from '../ActivityCard/ActivityCard'; // Adjust the import path


const PopularDestinations = () => {
  const popularDestinations = [
    {
      _id: '1',
      name: 'Eiffel Tower',
      description: 'Visit the iconic Eiffel Tower in Paris.',
      imageURL: 'eiffelTower.png',
      price: 50,
      destination: 'Paris, France',
    },
    {
      _id: '2',
      name: 'Taj Mahal',
      description: 'Explore the magnificent Taj Mahal in India.',
      imageURL: 'tajMahal.png',
      price: 40,
      destination: 'Agra, India',
    },
        {
          _id: '3',
          name: 'Colosseum',
          description: 'Explore the historic Colosseum in Rome.',
          imageURL: 'colosseum.png',
          price: 45,
          destination: 'Rome, Italy',
        },
        {
          _id: '4',
          name: 'Niagara Falls',
          description: 'Experience the majestic Niagara Falls in Canada.',
          imageURL: 'niagaraFalls.png',
          price: 60,
          destination: 'Niagara Falls, Canada',
        },
        {
          _id: '5',
          name: 'London Eye',
          description: 'Get a bird\'s eye view of London from the London Eye.',
          imageURL: 'londonEye.png',
          price: 55,
          destination: 'London, UK',
        },
        {
          _id: '6',
          name: 'Sydney Opera House',
          description: 'Visit the iconic Sydney Opera House in Australia.',
          imageURL: 'sydneyOperaHouse.png',
          price: 70,
          destination: 'Sydney, Australia',
        },
        {
          _id: '7',
          name: 'La Sagrada Familia',
          description: 'Discover the masterpiece of Antoni Gaudí in Barcelona.',
          imageURL: 'laSagradaFamilia.png',
          price: 65,
          destination: 'Barcelona, Spain',
        },
        {
          _id: '8',
          name: 'Duomo di Milano',
          description: 'Marvel at the stunning architecture of Milan Cathedral.',
          imageURL: 'duomoDiMilano.png',
          price: 50,
          destination: 'Milan, Italy',
        },
        {
          _id: '9',
          name: 'Tokyo Disney Resort',
          description: 'Experience the magic of Disney in Tokyo, Japan.',
          imageURL: 'tokyoDisneyResort.png',
          price: 75,
          destination: 'Tokyo, Japan',
        },
        {
          _id: '10',
          name: 'Burj Khalifa',
          description: 'Ascend the tallest building in the world in Dubai.',
          imageURL: 'burjKhalifa.png',
          price: 85,
          destination: 'Dubai, UAE',
        },
        {
          _id: '11',
          name: 'Central Park',
          description: 'Enjoy a leisurely stroll through Central Park in New York.',
          imageURL: 'centralPark.png',
          price: 40,
          destination: 'New York City, USA',
        },
        {
          _id: '12',
          name: 'Borobudur Temple',
          description: 'Explore the ancient Borobudur Temple in Indonesia.',
          imageURL: 'borobudurTemple.png',
          price: 55,
          destination: 'Magelang, Indonesia',
        },
      ];
      


  return (
    <div className="popular-destinations-container">

      <div className="popular-destinations tourist-attraction-container">
        {popularDestinations.map((activity) => (
          <ActivityCard key={activity._id} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default PopularDestinations;
