const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model')
const productRoutes = require('./routes/product.route')
const authRoutes = require('./routes/auth.route')
require("dotenv").config();

const app = express()


app.use(express.json());
app.use('/api', productRoutes);
app.use('/auth', authRoutes);


app.get('/', (req, res) => {
  res.send('Hello World This is Emman or you can can call me nuel.\n I am a backend engineer with nodejs and mongodb.')
});

mongoose.connect('mongodb+srv://admin:5J8ksFtnnLiCAebM@backenddb.cjcx7ph.mongodb.net/Inventory?retryWrites=true&w=majority')
.then(() =>{
  console.log('Connected to Database')

  app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

})
.catch(() =>{
    console.log('Error connecting to Database')
});