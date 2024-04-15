
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const { JsonWebTokenError } = require("jsonwebtoken");
const User = require("../../models/User");

module.exports = {
    create,
    login
};

// controllers/api/users.js

async function create(req, res) {
  console.log('ay calamardo');
    try {
        // Add the user to the database
        //console.log(req.body);
        const user = await User.create(req.body);

        const token = createJWT(user);

        res.json(token);
      
    } catch (err) {
      // Client will check for non-2xx status code 
      // 400 = Bad Request
      res.status(400).json(err);
      console.log(err);
    }
  }
  async function login(req, res) {
    const {email, password} = req.body;
    
    try {
        const user = await User.findOne({email});
        if(!user) {
          return res.status(400).json({error: 'Invalid credentials'})
        }

        const isValidPassword = await bcrypt.compare(password, user.password);
        if(!isValidPassword) {
          return res.status(400).json({error: 'Invalid credentials'})
        }

        const token = createJWT(user);
        res.json({token});

      } catch(error) {
        console.log('valio v: ',error);
        console.error('Login error: ', error);
        res.status(500).json({error: 'Server error'});
      }
  }

  function createJWT(user) {
    return jwt.sign(
        {user},
        process.env.SECRET,
        {expiresIn: "24h"}
    );
  }