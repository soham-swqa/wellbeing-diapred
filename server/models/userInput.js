// server/models/UserInput.js
const mongoose = require('mongoose');

const userInputSchema = new mongoose.Schema({
  Age: Number,
  Pregnancies: Number,
  Glucose: Number,
  BloodPressure: Number,
  Insulin: Number,
  BMI: Number,
  SkinThickness: Number,
  DPF: Number,
});

module.exports = mongoose.model('UserInput', userInputSchema);
