'use strict';

module.exports = function (app) {
    var userHandlers = require('../controllers/userController');

    app.route('/tasks').post(userHandlers.loginRequired, userHandlers.profile);

    app.route('/auth/register').post(userHandlers.register);

    app.route('/auth/login').post(userHandlers.signIn);

    app.route('/user/update').post(userHandlers.updateUser);

    app.route('/user/one/:id').get(userHandlers.getUser);

    app.route('/users/all').get(userHandlers.getAllUsers);

    app.route('/user/:id/address/save').post(userHandlers.saveAddress);

    app.route('/addresses/all').get(userHandlers.getAllAddresses);

};