const express = require('express');
const router = express.Router();
const movie_controller = require("../controller/movie.js")
router.post('/add_movie', movie_controller.add)
router.get('/get_movie' , movie_controller.get);

router.use(async (error, req, res, next) => {
    if (error.code == 11000) { res.status(409).json({ message: "Duplicate Key Error" }) }
    else {
        res.status(500).json({ message: "Internal Server Error" });
    }
});




module.exports = router