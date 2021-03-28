const User = require('../schema/userSchema');

const createUser = async (req, res) => {
    const user = new User(req.body);
    user.save((error, result) => {
        if (error) {
            res.json({ status: false });
        } else {
            res.json({ status: true });
        }
    });
};



module.exports = {createUser};