'use strict';

describe('Scorecard', function(){
    var scorecard;

    beforeEach(function() {
        scorecard = new Scorecard();
    });

    it('starts with a score of 0', function() {
        expect(scorecard.gamescore).toEqual(0);
    });

    it('use getCurrentScore to get gamescore', function(){
        expect(scorecard.getCurrentScore()).toEqual(0);
    });

    it('adds rollscore to gamescore', function() {
        var scoreFive = { score: 5 }
        expect(scorecard.rollscore(5)).toEqual(5);
    });
});