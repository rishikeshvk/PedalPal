const mongoose = require("mongoose");

const bicycleSchema = new mongoose.Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    gear: { type: String, required: true },
    type: { type: String, required: true },
    bookedTimeSlots: [
        {
            from: { type: String, required: true },
            to: { type: String, required: true }
        }
    ],
    rentPerHour: { type: Number, required: true }

}, { timestamps: true }
)

const bicycleModel = mongoose.model('bicycles', bicycleSchema)
module.exports = bicycleModel