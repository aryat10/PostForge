const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const UserModel = require('./models/user'); 
const bcrypt = require('bcryptjs');



const salt = bcrypt.genSaltSync(10);

// Middleware to parse JSON bodies
app.use(cors());
app.use(express.json());


mongoose.connect('mongodb+srv://PostForge:PostForge4321@cluster0.s3zcr.mongodb.net/?retryWrites=true&w=majority')
  .then(() => console.log('Connected to MongoDB ✅'))
  .catch(err => console.error('Failed to connect to MongoDB:❌', err));

// POST route
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const userDoc = await UserModel.create({ username, password: bcrypt.hashSync(password, salt) });
    res.status(201).json(userDoc); 
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});


const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Server is running fine on port ${PORT}👽`)
});
