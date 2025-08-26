import express from 'express';
import User from '../models/User.js';

const router = express.Router();

// POST /addUser -> add user to DB
router.post('/addUser', async (req, res) => {
    try {
        const { name, role, email } = req.body;
        if (!name || !role || !email) {
            return res.status(400).json({ error: 'name, role, email required' });
        }

        // simple duplicate check by email
        const existing = await User.findOne({ email });
        if (existing) {
            return res.status(409).json({ error: 'User with this email already exists' });
        }

        const user = new User({ name, role, email });
        await user.save();
        return res.status(201).json({ message: 'User added', user });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
});

// GET /users -> list users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find().sort({ createdAt: -1 }).limit(100);
        return res.json({ users });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ error: 'Server error' });
    }
});

export default router;