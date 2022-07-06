const mongoose = require('mongoose');
var validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const users = mongoose.Schema(
    {
        user_name: { type: String },
        user_mobile: { type: String },
        user_email: { type: String, validate: [validateEmail, 'Please enter a valid email address'], required: [true, 'User Email is required'], lowecase: true, unique: true },
        user_password: { type: String }
    },
    { timestamps: true }
);
module.exports = mongoose.model('users', users);

