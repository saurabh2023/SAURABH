const user_model = require("../models/users.js")
const bcrypt = require('bcrypt');

exports.signup = async (req, res, next) => {
    try {
        let document_body = {
            user_name: req.body.name,
            user_mobile: req.body.mobile,
            user_email: req.body.email,
            user_password: await bcrypt.hash(req.body.password, 10)
        }
        let add_new_user = await user_model.create(document_body);
        if (add_new_user) {
            res.status(200).json({ message: "User added Successfully" })
        }
        else{
            res.status(200).json({ message: "There was some error adding user" })
        }
    }
    catch (err) {
        console.log(err);
        next(err)
    }
}


exports.login = async (req, res, next) => {
    try {
        let query_body = {
            user_email: req.body.email,
        }
        let find_user = await user_model.findOne(query_body);
        if (find_user) {
            let compare_passwords = await bcrypt.compare(req.body.password , find_user.user_password);
            if(compare_passwords){
                res.status(200).json({ message: "Login successful" })
                req.session.details = find_user.user_email;
                req.session.save(function(err) {})
                console.log(req.session)
            }
            else{
                res.status(401).json({ message: "Please check password and try again" })
            }
        }
        else{
            res.status(200).json({ message: "User not found" })
        }
    }
    catch (err) {
        console.log(err);
        next(err)
    }
}

exports.check_session = async(req, res, next)=>{
try {
    console.log(req.session);
    if(req.session.details){
        res.status(200).json(true);
    }
    else{
        res.status(200).json(false);
    }
} catch (error) {
    console.log(error);
    next(error)
}
}
