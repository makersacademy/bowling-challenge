'use strict';

describe('Bowling', function() {
    var game;

    beforeEach(function() {
        game = new Bowling();
    });


    it('should return a score of 0 if all rolls were 0', () => {
        for (var i = 0; i < 20; i++) {
            game.roll(0);
        }
        expect(game.score()).toEqual(0);
    });

});