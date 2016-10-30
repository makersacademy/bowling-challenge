var Frame = require('../lib/Frame.js');

function Game() {
    this.frames = [];
}

Game.prototype.start = function() {
    for (var i = 0; i < 10; i++) {
        this.frames.push(new Frame());
    }
};

module.exports = Game;