describe('Game', function () {
    'use strict';
    var scorecard;
    var game;
    beforeEach(function () {
        scorecard = jasmine.createSpy('ScoreCard');
        game = new Game();
    });

    it("starts with a frame of 1 and roll 1", function () {
        expect(game.frame).toEqual(1);
        expect(game.roll).toEqual(1);
    });
});
