'use strict';

describe('Game', function() {
    let game;

    beforeEach(function() {
        game = new Game();
    });

    it('Initialize frame number should be 1', function() {
        expect(game.getFrameNo()).toEqual(1);
    });

    it('Initialize score should be 0', function() {
        expect(game.getScore()).toEqual(0);
    });

    it('Initialize with 10 frame objects', function() {
        expect(game.getFrames().length).toEqual(10);
    });

    it('Initialize frame should be 1', function() {
        expect(game.getCurrentFrame()).toEqual([]);
    });
});
