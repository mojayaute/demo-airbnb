'use strict';

var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,


    User = require('./src/models/user'),
    bodyParser = require('body-parser'),
    jsonwebtoken = require("jsonwebtoken");

const mongoose = require('mongoose');
const cors = require('cors');
const option = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};

//const mongoURI = process.env.MONGODB_URI;

mongoose.connect('mongodb://127.0.0.1:27017/airbnb_test', option).then(function () {
    //connected successfully
    console.log("DB connection succesfully");
}, function (err) {
    //err handle
    console.log("Error on connecting DB -> ", err);
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
    if (req.headers && req.headers.authorization && req.headers.authorization.split(' ')[0] === 'JWT') {
        jsonwebtoken.verify(req.headers.authorization.split(' ')[1], 'RESTFULAPIs', function (err, decode) {
            if (err) req.user = undefined;
            req.user = decode;
            next();
        });
    } else {
        req.user = undefined;
        next();
    }
});
var routes = require('./src/routes/userRoutes');
routes(app);

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(port);

console.log(' RESTful API server started on: ' + port);

module.exports = app;