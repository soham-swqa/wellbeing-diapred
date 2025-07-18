// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const UserInput = require('../models/userInput');

router.post('/submit', async (req, res) => {
  try {
    const formData = new UserInput(req.body);
    await formData.save();
    res.status(201).send('Data saved successfully');
  } catch (error) {
    res.status(500).send('Error saving data');
  }
});

module.exports = router;
