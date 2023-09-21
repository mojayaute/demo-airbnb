'use strict';

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
let User = mongoose.model('User');

exports.register = async function (req, res) {
    try {
        var newUser = new User(req.body);
        newUser.password = bcrypt.hashSync(req.body.password, 10);
        let resUser = await newUser.save();
        res.json({ status: true, message: 'Succesfully registered.', data: resUser });
    } catch (error) {
        console.error("An error ocurred -> ", error);
        res.json({ status: false, data: error });
    }
};

exports.signIn = async function (req, res) {
    try {
        console.log(req.body);
        let user = await User.findOne({
            email: req.body.email
        });
        if (!user || !bcrypt.compareSync(req.body.password, user.password)) {
            return res.json({ status:false, message: 'Authentication failed. Invalid user or password.' });
        }
        return res.json({
            status: true,
            data: user,
            message: 'Logged correctly',
            token: jwt.sign({ email: user.email, full_name: user.full_name, _id: user._id }, 'RESTFULAPIs')
        });
    } catch (error) {
        console.log(error);
        return res.json({ status: false, data: error });
    }
};


exports.updateUser = async function (req, res) {
    try {
        let resUser = await User.updateOne({email: req.body.email}, req.body);
        console.log(resUser);
        res.json({ status: true, data: resUser });
    } catch (error) {
        console.error("An error ocurred -> ", error);
        res.json({ status: false, data: error });
    }
};

exports.getUser = async function (req, res) {
    try {
        let resUser = await User.find({email: req.email});
        console.log(resUser);
        res.json({ status: true, data: resUser });
    } catch (error) {
        console.error("An error ocurred -> ", error);
        res.json({ status: false, data: error });
    }
};


exports.getAllAddresses = async function (req, res) {
    try {
        let resUsers = await User.find();
        //filter by addresses...
        console.log(resUsers);
        res.json({ status: true, data: resUser });
    } catch (error) {
        console.error("An error ocurred -> ", error);
        res.json({ status: false, data: error });
    }
};


exports.loginRequired = function (req, res, next) {
    if (req.user) {
        next();
    } else {
        return res.status(401).json({ message: 'Unauthorized user!!' });
    }
};

exports.profile = function (req, res, next) {
    if (req.user) {
        res.send(req.user);
        next();
    } else {
        return res.status(401).json({ message: 'Invalid token' });
    }
};