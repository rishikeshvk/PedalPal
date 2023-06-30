const express = require('express');
const router = express.Router();
const Rental = require('../models/rentalModel');
const Bicycle = require('../models/bicycleModel');
const { v4: uuidv4 } = require('uuid');
const stripe = require('stripe')("sk_test_51NOHzjSFdHuJ3OrQOZjdpBypECTru6QtWwceEm8vG6l08tWYpnV2Okub73pMZcXxBlcyGxjx50hONiTEsaJAfdEj00rQfxFehk");

router.post('/rentbicycle', async (req, res) => {
    const { token } = req.body;
    try {
        const customer = await stripe.customers.create({
            email: token.email,
            source: token.id
        });

        const payment = await stripe.charges.create({
            amount: req.body.totalAmount * 100,
            currency: 'inr',
            customer: customer.id,
            receipt_email: token.email,
        }, {
            idempotencyKey: uuidv4()
        });

        if (payment) {
            req.body.transactionId = payment.source.id;
            const newrental = new Rental(req.body);
            await newrental.save();
            const bicycle = await Bicycle.findOne({ _id: req.body.bicycleId });
            console.log(req.body.bicycle);
            bicycle.bookedTimeSlots.push(req.body.bookedTimeSlots);

            await bicycle.save();
            res.send({ message: 'Your booking is successfull' });
        } else {
            res.send({ message: 'Payment Failed' });
        }
    } catch (error) {
        return res.status(400).json({ message: 'Something went wrong' });
    }
});

router.get('/getallrentals', async (req, res) => {
    try {
        const rentals = await Rental.find().populate('bicycle');
        res.send(rentals);
    } catch (error) {
        return res.status(400).json({ message: 'Something went wrong' });
    }
});

module.exports = router;