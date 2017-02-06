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
        frames = scoreFifteen();
       expect(score.calculateScore(frames)).toEqual(15); 
    });
    
    it("returns the correct score after a strike and two throws", function() {
        frames = scoreTwentyTwo();
        console.log(frames);
        expect(score.calculateScore(frames)).toEqual(22); 
    });
});

function oneThrowGame() {
    var game = new Game;
    game.throwBall();
    return game.frames;
}

function scoreFifteen() {
    
    var shot = jasmine.createSpyObj('shot', ['bowl']);
    var game = new Game(shot);
    shot.bowl.and.returnValue(5);
    for(var i = 0; i < 3; i++) {
        game.throwBall();
    }
    return game.frames;
}

function scoreTwentyTwo() {
    var shot = jasmine.createSpyObj('shot', ['bowl']);
    var game = new Game(shot);
    shot.bowl.and.returnValue(10);
    game.throwBall();
    shot.bowl.and.returnValue(3);
    game.throwBall();
    game.throwBall();
    console.log(game.frames);
    return game.frames;
}