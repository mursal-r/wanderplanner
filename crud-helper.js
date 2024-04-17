// Connect to the database
require('dotenv').config();
require('./config/database');

// Require Mongoose and the Activity model
const mongoose = require('mongoose');
const Activity = require('./models/Activity');

// Create an array of activities
const activities = [
  {
    name: 'Colosseum',
    description: 'Explore the historic Colosseum in Rome.',
    imageURL: 'colosseum.png',
    price: 45,
    destination: 'Rome, Italy',
  },
  {
    name: 'Duomo di Milano',
    description: 'Marvel at the stunning architecture of Milan Cathedral.',
    imageURL: 'duomoDiMilano.png',
    price: 50,
    destination: 'Milan, Italy',
  },
  {
    name: 'Leaning Tower of Pisa',
    description: 'Visit the iconic Leaning Tower of Pisa.',
    imageURL: 'leaningTowerOfPisa.png',
    price: 40,
    destination: 'Pisa, Italy',
  },
  {
    name: 'Venice Canals',
    description: 'Experience the charm of Venice by exploring its intricate canal network.',
    imageURL: 'veniceCanals.png',
    price: 55,
    destination: 'Venice, Italy',
  },
  {
    name: 'Vatican City',
    description: 'Explore the heart of Catholicism and visit iconic landmarks like St. Peter\'s Basilica.',
    imageURL: 'vaticanCity.png',
    price: 60,
    destination: 'Vatican City',
  },
  {
    name: 'Cinque Terre',
    description: 'Discover the colorful coastal villages of Cinque Terre.',
    imageURL: 'cinqueTerre.png',
    price: 65,
    destination: 'Cinque Terre, Italy',
  }
  ];
  

// Create multiple activities using a loop
async function createActivities() {
  try {
    for (const activityData of activities) {
      const newActivity = new Activity(activityData);
      const savedActivity = await newActivity.save();
      console.log('New activity created:', savedActivity);
    }
    console.log('All activities created successfully.');
  } catch (error) {
    console.error('Error creating activities:', error);
  }
}

// Call the createActivities function to create multiple activities
createActivities();
