const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const secretKey = 'your-secret-key'; // Replace this with a strong secret key for JWT

const User = require('../model/User')

// signup

const signUp = async (req,res) => {
  const { username, email, password } = req.body

  try {
    let user = await User.create({username: username, email: email, password: password})
  
    return res.status(200).send({
      status: "ok",
      message: "User created successfully"
    })
  } catch(err) {
    return res.status(400).send({
      status: "error",
      message: err.message
    })
  }
}

// login 
const login = async (req, res) => {
    const { email, password } = req.body;
  
    // Check if the username exists
    const user = await User.findOne({ email: email});

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }
  
    // Verify the password using bcrypt
    let isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid' });
    }
  
    // Generate a JWT token
    const token = jwt.sign({ userId: user.id, username: user.username }, secretKey, { expiresIn: '1h' });
  
    res.json({access_token: token, message: 'successfully login'});
  }

  module.exports = { signUp, login }