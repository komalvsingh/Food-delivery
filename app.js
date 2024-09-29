import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import userrouter from './src/user.js';
import productrouter from "./src/product.js"
import cors from "cors";

dotenv.config(); 

const app = express(); 
app.use(express.json()); 
app.use(bodyParser.json()); 

const PORT = process.env.PORT || 5001; 
const databaseUrl = process.env.MONGODB_URL || 'mongodb://localhost:27017/foodapp';
const CLIENT_URL = process.env.CLIENT_URL || " http://localhost:5173";

app.use(cors({
  origin: CLIENT_URL,
  credentials: true
}));

mongoose.connect(databaseUrl)
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Initial connection error:', err);
  });

app.get('/ping', (_req, res) => {
  return res.json({ msg: 'Ping Successful' });
});

app.use('/api/user', userrouter);
app.use('/api/product', productrouter); 

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
