

const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('../backend/Routes/userRoutes'); 
const app = express();
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/RestFullApiUser', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


app.use('/users', userRoutes);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
