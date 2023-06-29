const express = require('express');
const router = express.Router();
const Bicycle = require('../models/bicycleModel');

router.get('/getallbicycles', async (req, res) => {
    try {
        const bicycles = await Bicycle.find({});
        res.send(bicycles);
    }
    catch (err) {
        return res.status(400).json({ message: err });
    }
});

router.post('/addbicycle', async (req, res) => {
    try {
        const newbicycle = new Bicycle(req.body);
        await newbicycle.save();
        res.send("Bicycle added successfully");
    }
    catch (err) {
        return res.status(400).json({ message: err });
    }
});

router.post('/editbicycle', async (req, res) => {
    try {
        const bicycle = await Bicycle.findOne({ _id: req.body._id });
        bicycle.name = req.body.name;
        bicycle.image = req.body.image;
        bicycle.type = req.body.type;
        bicycle.gear = req.body.gear;
        bicycle.rentPerHour = req.body.rentPerHour;
        
        await bicycle.save();

        res.send("Bicycle details edited successfully");
    }
    catch (err) {
        return res.status(400).json({ message: err });
    }
});

router.post('/deletebicycle', async (req, res) => {
    try {
        await Bicycle.findOneAndDelete({ _id: req.body.bicycleid });
        res.send("Bicycle deleted successfully");
    }
    catch (err) {
        return res.status(400).json({ message: err });
    }
});

module.exports = router;
