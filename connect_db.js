const mongoose = require('mongoose');
const db_url = `mongodb+srv://saurabh20:saurabh1823@cluster0.h9pbz.mongodb.net/movies?retryWrites=true&w=majority`;
const connectDB = async () => {
    mongoose.connect(db_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("here");
};

module.exports = connectDB;