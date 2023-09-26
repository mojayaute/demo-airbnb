'use strict';

const mongoose = require('mongoose');
let Schema = mongoose.Schema;

/**
 * Address Schema
 */
let AddressSchema = new Schema({
    country: {
        type: String,
        trim: true,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true,
    },
    street: {
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const Address = mongoose.model('Address', AddressSchema);

/**
 * User Schema
 */
let UserSchema = new Schema({
    full_name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    password: {
        type: String,
        required: true,
    },
    addresses: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Address'
    }],
    created_at: {
        type: Date,
        default: Date.now
    }
});

const User = mongoose.model('User', UserSchema);

let placeSchema = new Schema({
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

const Place = mongoose.model('Place', placeSchema);
