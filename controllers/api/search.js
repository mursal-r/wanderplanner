const Activity = require("../../models/Activity");

module.exports = {
    getActivities,
    getActivityById
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
    async function getActivityById(req, res) {
      const id = req.body.id
        try {
            // Add the user to the database
            const activity = await Activity.findById(id);
  
            if(!activity) {
              return res.status(400).json({error: `No matches for: ${id}`})
            }
            res.json(activity);
          
        } catch (err) {
          // Client will check for non-2xx status code 
          // 400 = Bad Request
          res.status(400).json(err);
          console.log(err);
        }
      }