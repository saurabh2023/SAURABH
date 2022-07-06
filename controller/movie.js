const movie_model = require("../models/movies.js")

exports.add = async (req, res, next) => {
    try {

        if (req.session.details) {

            let document_body = {
                movie_name: req.body.name,
                movie_rating: req.body.rating,
                movie_city: req.body.city.toLowerCase(),
                movie_showing: req.body.showing
            }
            let add_new_movie = await movie_model.create(document_body);
            if (add_new_movie) {
                res.status(200).json({ message: "Movie added Successfully" })
            }
            else {
                res.status(200).json({ message: "There was some error adding movie" })
            }
        }
        else {
            res.status(401).json({ message: "Unauthorized access" })
        }
    }
    catch (err) {
        console.log(err);
        next(err)
    }
}


exports.get = async (req, res, next) => {
    try {
        if (req.session.details) {

            let query_body = {
                movie_city: req.body.city,
            }
            let find_movie = await movie_model.find(query_body);
            if (find_movie) {
                res.status(200).json({ message: find_movie })
            }
            else {
                res.status(200).json({ message: "User not found" })
            }
        }
        else {
            res.status(401).json({ message: "Unauthorized access" })
        }
    }
    catch (err) {
        console.log(err);
        next(err)
    }
}
