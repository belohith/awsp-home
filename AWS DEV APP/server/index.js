const express = require('express');
const mongoose = require('mongoose');
const app = express();

const mongoDBUrl = 'mongodb://localhost:27017/your-database-name';
mongoose.connect(mongoDBUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to the database');
    // Additional server setup and routes can be defined here
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });
