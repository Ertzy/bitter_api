const express = require('express');
const visualScreen = require('./models/visualModel')
const app = express();
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const visualRouter = require('./routes/visualRouter')
const userRouter = require('./routes/userRouter')
const mongo = "mongodb://10.12.8.42:27017/?directConnection=true&appName=mongosh+2.1.5";

app.use(bodyParser.json())
app.use(cors());

app.get('/posts', async (req, res) => {
    try {
      const posts = await visualScreen.find().sort({ createdAt: -1 }).limit(10); // Sort by creation date in descending order
      res.json(posts);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });


mongoose.connect(mongo)
    .then((result) => {app.listen(6969); 
    console.log('string')})

app.use(visualRouter)
app.use(userRouter)