'use strict';

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

let listingsAndReviews = new Schema({
    listing_url: {
        type: String
    },
    name: {
        type: String
    },
    summary: {
        type: String
    },
    space: {
        type: String
    },
    description: {
        type: String
    },
    neighborhood_overview: {
        type: String
    },
    notes: {
        type: String
    },
    transit: {
        type: String
    },
    access: {
        type: String
    },
    interaction: {
        type: String
    },
    interaction: {
        type: String
    }
});

const ListingsAndReview = mongoose.model('ListingsAndReview', listingsAndReviews);
