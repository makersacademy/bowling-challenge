var Game = require('../lib/Game.js');

describe('Game', function() {
    var game;
    beforeEach(function() {
        game = new Game();
    });
    
    it('contains 10 frames', function() {
        game.start();
        expect(game.frames.length).toEqual(10);
    });
});