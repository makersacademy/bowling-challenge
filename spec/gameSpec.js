var Game = require('../lib/Game.js');

describe('Game', function() {
    var game;
    beforeEach(function() {
        game = new Game();
        game.start();
    });
    
    it('contains 10 frames', function() {
        expect(game.frames.length).toEqual(10);
    });
    it('has a score of zero at start', function() {
        expect(game.score()).toEqual(0);
    });
    it('takes score for first bowl', function() {
        game.bowl(5);
        expect(game.score()).toEqual(5);
    });
});