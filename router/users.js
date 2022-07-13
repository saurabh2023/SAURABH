const express = require('express');
const router = express.Router();
const user_controller = require("../controller/users.js")

router.post('/signup', user_controller.signup)
router.post('/login', user_controller.login)
router.get('/check_session' , user_controller.check_session);

router.use(async (error, req, res, next) => {
    if (error.code == 11000) { res.status(409).json({ message: "Duplicate Key Error" }) }
    else {
        res.status(500).json({ message: "Internal Server Error" });
    }
});


module.exports = router