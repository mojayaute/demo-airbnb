'use strict';

module.exports = function (app) {
    var listController = require('../controllers/ListingController');

    app.route('/places/all').get(listController.getAll);
};