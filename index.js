const express = require('express');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const app = express();
const connect_db = require('./connect_db.js')
require('dotenv').config({ path: __dirname + '/envoirment_variables.env' });

app.set('trust proxy', 1)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// const user = process.env.DB_username;
// const pass = process.env.DB_password;

app.use(session({
    secret: process.env.SESSION_SECRET,
    cookie: {
        maxAge: 365 * 24 * 60 * 60 * 1000,
        sameSite: true
    },
    saveUninitialized: true,
    resave: true,
    store: MongoStore.create({
        mongoUrl: `mongodb+srv://saurabh:saurabh20@cluster0.h9pbz.mongodb.net/movies?retryWrites=true&w=majority`
    })
}));

const user_routes = require('./router/users.js')
const movie_routes = require('./router/movie.js')

app.use('/bms/users/' , user_routes)
app.use('/bms/movies/' , movie_routes)


app.listen(3000 , async()=>{await connect_db() ; console.log("Connection initial")})