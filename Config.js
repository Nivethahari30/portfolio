const mongoose = require('mongoose');

console.log('Starting connection...');
mongoose.connect('mongodb://127.0.0.1:27017/Portfolio')
  .then(() => console.log('Connected!'))
  .catch((err) => console.error('Connection error:', err));
