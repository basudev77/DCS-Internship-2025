import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import usersRouter from './routes/users.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/interns_db';

// Middleware
app.use(cors());
app.use(express.json());

// Basic routes
app.get('/', (req, res) => res.send('Welcome Interns'));
app.get('/about', (req, res) => res.send('About Page'));
app.get('/contact', (req, res) => res.send('Contact Page'));

// API routes
app.use('/', usersRouter);

// Connect to DB and start server
mongoose.connect(MONGODB_URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
        process.exit(1);
    });

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
