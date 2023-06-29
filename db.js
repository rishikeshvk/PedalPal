const { mongoose } = require("mongoose");
const dotenv = require('dotenv').config();

function connectDB() {
    mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected...'))
        .catch(err => console.log(err));
}

connectDB();

module.exports = mongoose;