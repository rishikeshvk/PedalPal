const mongoose = require('mongoose');
const { t } = require('tar');

const rentalSchema = new mongoose.Schema({

    bicycle: { type: mongoose.Schema.Types.ObjectId, ref: 'bicycles' },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'users' },
    bookedTimeSlots: {
        from: { type: String },
        to: { type: String }
    },
    totalHours: { type: Number },
    totalAmount: { type: Number },
    transactionId: { type: String },
    driverRequired: { type: Boolean }


},   { timestamps: true }
)

const rentalModel = mongoose.model('rentals', rentalSchema)

module.exports = rentalModel
