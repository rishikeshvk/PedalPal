const express = require('express');
const router = express.Router();
const User = require('../models/userModel');

router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username: username });
        if (user.password === password) {
            res.send(user);
        }
        else {
            res.send("Incorrect password");
        }
    }
    catch (err) {
        return res.status(400).json({ message: err });
    }
});

router.post("/register", async(req, res) => {
    try {
        const newuser = new User(req.body)
        await newuser.save()
        res.send('User registered successfully')
    } catch (error) {
      return res.status(400).json(error);
    }
});

module.exports = router
