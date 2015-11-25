var pinsBowleds = require('../../app/controllers/pinsBowleds.server.controller');

module.exports = function(app) {
    app.route('/pinsBowleds').post(pinsBowleds.create).get(pinsBowleds.list);
};