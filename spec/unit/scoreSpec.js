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
