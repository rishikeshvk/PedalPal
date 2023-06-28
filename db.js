const { mongoose } = require("mongoose");

function connectDB() {
    mongoose.connect('mongodb+srv://pedalpal:G3vOjCD6eUhlVYG9@pedalpal.wq5ms8e.mongodb.net/pedalpal', { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log('MongoDB connected...'))
        .catch(err => console.log(err));
}

connectDB();

module.exports = mongoose;