'use strict';

const mongoose = require('mongoose');
let Schema = mongoose.Schema;


let AddressSchema = new Schema({
    country: {
        type: String,
        trim: true,
        required: true
    },
    state: {
        type: String,
        unique: true,
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
});

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
    addresses: [AddressSchema],
    created_at: {
        type: Date,
        default: Date.now
    }
});

mongoose.model('User', UserSchema);