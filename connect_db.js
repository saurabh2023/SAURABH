const mongoose = require('mongoose');
// const user = process.env.DB_username;
// const pass = process.env.DB_password;
const db_url = `mongodb+srv://saurabh:saurabh20@cluster0.h9pbz.mongodb.net/movies?retryWrites=true&w=majority`;
const connectDB = async () => {
    mongoose.connect(db_url, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("Db Connection successful");
};

module.exports = connectDB;