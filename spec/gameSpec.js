'use strict';

describe('Game', function() {

    var game;

    beforeEach(function() {
        game = new Game();
    });

    it('exists', function() {
        expect(game).not.toBeUndefined();
    });

    it('starts on frame 1', function() {
        expect(game._currentFrame).toEqual(1);
    });

    it('allows the player to bowl', function() {
        expect(game.bowl).not.toBeUndefined(); //TODO make a better test using spyOnObj
    });

    it('records the end of each frame', function() {
        game.bowl(7);
        game.bowl(2);
        expect(game.bowl(2)).toEqual(game.endFrame());
    });

    it('records the scores of each frame on the scorecard', function() {
        game.bowl(7);
        game.bowl(2);
        expect(game._scorecard["Frame 1"]).toContain(7);
        expect(game._scorecard["Frame 1"]).toContain(2);
    });

    it('ends after frame 10', function() {
        for(var i = 1; i <= 10; i++) {
            game.bowl(2);
            game.bowl(4);
        }
        expect(game.isEnded()).toBe(true);
    })

    it('raises an error if you try to bowl after all 10 frames have finished', function() {
        game._currentFrame = 11;
        expect(function(){ game.bowl(2); }).toThrowError("The game has ended")
    })


});
