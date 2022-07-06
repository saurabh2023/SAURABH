const mongoose = require('mongoose');
const movies_lists = mongoose.Schema(
    {
        movie_name: { type: String },
        movie_rating: { type: String },
        movie_city: { type: String ,  lowecase: true},
        movie_showing: { type: [] }
    },
    { timestamps: true }
);
module.exports = mongoose.model('movies_lists', movies_lists);

