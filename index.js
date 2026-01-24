require("dotenv").config();

const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model')
const productRoutes = require('./routes/product.route')
const authRoutes = require('./routes/auth.route')
const Todo = require('./models/todo.model')
const todoRoutes = require('./routes/todo.route')


const app = express()


app.use(express.json());
app.use('/api', productRoutes);
app.use('/auth', authRoutes);
app.use('/todos', todoRoutes);


app.get('/', (req, res) => {
  res.send('Hello World This is Emman or you can can call me nuel.\n I am a backend engineer with nodejs and mongodb.')
});

app.use((err, req, res, next) => {
    console.error("FULL ERROR DETAIL:", err); // This prints the real error to your VS Code terminal
    res.status(500).json({
        message: "Something went wrong!",
        error: err.message // This sends the real message to Postman
    });
});

mongoose.connect(process.env.MONGODB_URI)
.then(() =>{
  console.log('Connected to Database')

  app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})

})
.catch(() =>{
    console.error('DATABASE CONNECTION ERROR:', err);
});