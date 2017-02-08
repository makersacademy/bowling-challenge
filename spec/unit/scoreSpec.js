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
        frames = scoreTwelve();
       expect(score.calculateScore(frames)).toEqual(12); 
    });
    
    it("returns the correct score after a strike and two throws", function() {
        frames = scoreTwentyTwo();
        expect(score.calculateScore(frames)).toEqual(22); 
    });
    
    it("returns the correct score after a spare and two throws", function() {
        frames = scoreTwentyThree();
        expect(score.calculateScore(frames)).toEqual(23); 
    });
});

function oneThrowGame() {
    var game = new Game;
    game.throwBall();
    return game.frames;
}

function scoreTwelve() {
    
    var shot = jasmine.createSpyObj('shot', ['bowl']);
    var game = new Game(shot);
    shot.bowl.and.returnValue(4);
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

function scoreTwentyThree() {
    var shot = jasmine.createSpyObj('shot', ['bowl']);
    var game = new Game(shot);
    shot.bowl.and.returnValue(5);
    for(var i = 0; i < 3; i++) {
        game.throwBall();
    }
    shot.bowl.and.returnValue(3);
    game.throwBall();
    return game.frames;
}