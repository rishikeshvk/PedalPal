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

// router.post('/addbicycle', async (req, res) => {
//     try {
//         const newbicycle = new Bicycle(req.body);
//         await newbicycle.save();
//         res.send("Bicycle added successfully");
//     }
//     catch (err) {
//         return res.status(400).json({ message: err });
//     }
// });

module.exports = router;
