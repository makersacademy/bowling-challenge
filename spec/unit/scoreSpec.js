'use strict';

describe('Score', function() {
    
    var score;
    var frames;
    var firstFrame;
    
    beforeEach(function() {
        score = new Score;
    });
    
    it("returns the correct score from one throw", function() {
        frames = oneThrowGame();
        firstFrame = frames[0];
        expect(score.calculateScore(frames)).toEqual(10 - firstFrame.pinsStanding());
    });
    
    it("returns the correct score after 3 throws", function() {
        frames = threeThrowGame();
       expect(score.calculateScore(frames)).toEqual(15); 
    });
});

function oneThrowGame() {
    var game = new Game
    game.throwBall();
    return game.frames;
}

function threeThrowGame() {
    
    var shot = jasmine.createSpyObj('shot', ['bowl']);
    var game = new Game(shot)
    shot.bowl.and.returnValue(5);
    for(var i = 0; i < 3; i++) {
        game.throwBall();
    }
    return game.frames;
}