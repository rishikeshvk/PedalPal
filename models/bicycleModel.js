const mongoose = require("mongoose");

const bicycleSchema = new mongoose.Schema({
    name : {type: String, required : true}
})

const bicycleModel = mongoose.model('bicycles' , bicycleSchema)
module.exports = bicycleModel