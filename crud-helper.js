// Connect to the database
require('dotenv').config();
require('./config/database');

// Require Mongoose and the Activity model
const mongoose = require('mongoose');
const Activity = require('./models/Activity');

// Create an array of activities
const activities = [
    {
      name: 'Mountain Hiking Expedition',
      description: 'Explore challenging trails and stunning vistas in the mountains.',
      imageURL: 'https://example.com/mountain_hiking.jpg',
      price: 150,
      destination: 'Mountains'
    },
    {
      name: 'City Food Tour',
      description: 'Indulge in a culinary adventure exploring local delicacies in the city.',
      imageURL: 'https://example.com/city_food_tour.jpg',
      price: 80,
      destination: 'City'
    },
    {
      name: 'Beach Relaxation Retreat',
      description: 'Unwind and rejuvenate with yoga and relaxation sessions by the beach.',
      imageURL: 'https://example.com/beach_relaxation.jpg',
      price: 200,
      destination: 'Beach'
    },
    {
      name: 'Historical Landmarks Tour',
      description: 'Discover the rich history and architecture of iconic landmarks.',
      imageURL: 'https://example.com/historical_landmarks.jpg',
      price: 100,
      destination: 'City'
    },
    {
      name: 'Safari Wildlife Expedition',
      description: 'Embark on an exciting safari to observe wildlife in their natural habitat.',
      imageURL: 'https://example.com/safari_wildlife.jpg',
      price: 300,
      destination: 'Wilderness'
    },
    {
      name: 'River Rafting Adventure',
      description: 'Experience adrenaline-pumping rapids on a thrilling river rafting trip.',
      imageURL: 'https://example.com/river_rafting.jpg',
      price: 120,
      destination: 'River'
    },
    {
      name: 'Wine Tasting Experience',
      description: 'Savor a variety of exquisite wines at local vineyards.',
      imageURL: 'https://example.com/wine_tasting.jpg',
      price: 90,
      destination: 'Winery'
    },
    {
      name: 'Mountain Bike Trails',
      description: 'Ride through scenic mountain bike trails and enjoy the outdoors.',
      imageURL: 'https://example.com/mountain_bike.jpg',
      price: 110,
      destination: 'Mountains'
    },
    {
      name: 'Cultural Heritage Walk',
      description: 'Immerse yourself in the cultural heritage and traditions of the region.',
      imageURL: 'https://example.com/cultural_walk.jpg',
      price: 70,
      destination: 'City'
    },
    {
      name: 'Scuba Diving Exploration',
      description: 'Dive into underwater wonders and explore marine life through scuba diving.',
      imageURL: 'https://example.com/scuba_diving.jpg',
      price: 250,
      destination: 'Ocean'
    },
    {
      name: 'Skydiving Adventure',
      description: 'Experience the thrill of freefalling from high altitudes with expert instructors.',
      imageURL: 'https://example.com/skydiving.jpg',
      price: 400,
      destination: 'Sky'
    },
    {
      name: 'Desert Safari Experience',
      description: 'Discover the beauty of desert landscapes and enjoy camel rides.',
      imageURL: 'https://example.com/desert_safari.jpg',
      price: 180,
      destination: 'Desert'
    },
    {
      name: 'Skiing and Snowboarding',
      description: 'Hit the slopes and enjoy winter sports activities in snowy mountains.',
      imageURL: 'https://example.com/skiing_snowboarding.jpg',
      price: 250,
      destination: 'Mountains'
    },
    {
      name: 'Hot Air Balloon Ride',
      description: 'Soar above picturesque landscapes in a serene hot air balloon ride.',
      imageURL: 'https://example.com/hot_air_balloon.jpg',
      price: 300,
      destination: 'Sky'
    },
    {
      name: 'Adventure Park Thrills',
      description: 'Test your courage and agility with obstacle courses and ziplines.',
      imageURL: 'https://example.com/adventure_park.jpg',
      price: 150,
      destination: 'Adventure Park'
    },
    {
      name: 'Gourmet Cooking Class',
      description: 'Learn to prepare gourmet dishes under the guidance of expert chefs.',
      imageURL: 'https://example.com/cooking_class.jpg',
      price: 120,
      destination: 'City'
    },
    {
      name: 'Deep Sea Fishing Trip',
      description: 'Embark on a fishing expedition in deep waters for big catches.',
      imageURL: 'https://example.com/deep_sea_fishing.jpg',
      price: 180,
      destination: 'Ocean'
    },
    {
      name: 'Waterfall Trekking',
      description: 'Discover hidden waterfalls on a trek through lush forests.',
      imageURL: 'https://example.com/waterfall_trekking.jpg',
      price: 140,
      destination: 'Forest'
    },
    {
      name: 'Cruise Ship Vacation',
      description: 'Relax and enjoy luxury amenities on a scenic cruise ship journey.',
      imageURL: 'https://example.com/cruise_ship.jpg',
      price: 600,
      destination: 'Sea'
    },
    {
      name: 'Art Gallery Tour',
      description: 'Explore art galleries and exhibitions showcasing local and international artists.',
      imageURL: 'https://example.com/art_gallery.jpg',
      price: 50,
      destination: 'City'
    },
    {
      name: 'Canyon Hiking Adventure',
      description: 'Hike through majestic canyons and witness stunning geological formations.',
      imageURL: 'https://example.com/canyon_hiking.jpg',
      price: 180,
      destination: 'Canyon'
    },
    {
      name: 'Wildlife Sanctuary Visit',
      description: 'Observe and learn about diverse wildlife in a protected sanctuary.',
      imageURL: 'https://example.com/wildlife_sanctuary.jpg',
      price: 100,
      destination: 'Wildlife Sanctuary'
    },
    {
      name: 'Luxury Spa Retreat',
      description: 'Pamper yourself with rejuvenating spa treatments in a serene spa retreat.',
      imageURL: 'https://example.com/luxury_spa.jpg',
      price: 300,
      destination: 'Spa'
    },
    {
      name: 'Surfing Lessons',
      description: 'Ride the waves and learn to surf with experienced instructors.',
      imageURL: 'https://example.com/surfing_lessons.jpg',
      price: 90,
      destination: 'Beach'
    },
    {
      name: 'Botanical Garden Tour',
      description: 'Explore lush botanical gardens with diverse plant species and beautiful landscapes.',
      imageURL: 'https://example.com/botanical_garden.jpg',
      price: 60,
      destination: 'Botanical Garden'
    },
    {
      name: 'Astronomy Night',
      description: 'Discover the wonders of the night sky with stargazing and astronomy sessions.',
      imageURL: 'https://example.com/astronomy_night.jpg',
      price: 40,
      destination: 'Sky'
    },
    {
      name: 'Adventure Horseback Riding',
      description: 'Ride horses through scenic trails and enjoy an adventurous experience.',
      imageURL: 'https://example.com/horseback_riding.jpg',
      price: 120,
      destination: 'Trail'
    },
    {
      name: 'Local Market Tour',
      description: 'Explore vibrant local markets and discover unique products and flavors.',
      imageURL: 'https://example.com/local_market.jpg',
      price: 30,
      destination: 'City'
    },
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
