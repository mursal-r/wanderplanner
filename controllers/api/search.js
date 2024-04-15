const Activity = require("../../models/Activity");

module.exports = {
    getActivities
};

async function getActivities(req, res) {
    console.log('getActivities controller function');
    const {destination} = req.body
      try {
          // Add the user to the database
          const activities = await Activity.find({destination});

          if(!activities) {
            return res.status(400).json({error: `No matches for: ${destination}`})
          }
  
          res.json(activities);
        
      } catch (err) {
        // Client will check for non-2xx status code 
        // 400 = Bad Request
        res.status(400).json(err);
        console.log(err);
      }
    }