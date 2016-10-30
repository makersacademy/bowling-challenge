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
    it('takes score for second bowl', function() {
        game.bowl(5);
        game.bowl(2);
        expect(game.score()).toEqual(7);
    });
     it('takes score for third bowl', function() {
        game.bowl(5);
        game.bowl(2);
        game.bowl(6);
        expect(game.score()).toEqual(13);
    });
    it('adds a bonus of next bowl score for a spare', function() {
        game.bowl(5);
        game.bowl(5);
        game.bowl(6);
        expect(game.score()).toEqual(22);
    });
    it('adds a bonus of next two bowl scores for a strike', function() {
        game.bowl(10);
        game.bowl(6);
        game.bowl(2);
        expect(game.score()).toEqual(26);
    });
});