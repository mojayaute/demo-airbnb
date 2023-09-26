'use strict';

const mongoose = require('mongoose');
let ListingAndReview = mongoose.model('ListingAndReview');

exports.get = async function (req, res) {
    try {
        let data = await ListingAndReview.findById(req.params.id);
        console.log(data);
        res.json({ status: true, data: data });
    } catch (error) {
        console.error("An error ocurred -> ", error);
        res.json({ status: false, data: error });
    }
};

exports.getAll = async function (req, res) {
    try {
        let listings = await ListingAndReview.find();
        console.log(listings);
        res.json({ status: true, data: listings });
    } catch (error) {
        console.error("An error ocurred -> ", error);
        res.json({ status: false, data: error });
    }
};
