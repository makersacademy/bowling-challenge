'use strict';

describe('Score', function() {
    
    var score;
    var frames;
    var firstFrame;
    
    beforeEach(function() {
        score = new Score;
    });
    
    it("#calculateScore returns the correct score", function() {
        frames = oneThrowGame();
        firstFrame = frames[0];
        expect(score.calculateScore(frames)).toEqual(10 - firstFrame.pinsStanding());
    });
});

function oneThrowGame() {
    var game = new Game
    game.throwBall();
    return game.frames;
}