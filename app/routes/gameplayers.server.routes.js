var gameplayers = require('../../app/controllers/gameplayers.server.controller');

module.exports = function(app) {
    app.route('/gameplayers').post(gameplayers.create).get(gameplayers.list);
};