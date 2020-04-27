'use strict';

describe('Scorecard', function(){
    var scorecard;

    beforeEach(function() {
        scorecard = new Scorecard();
    });

    it('has no scores stored by default', function() {
        expect(scorecard.storedScores()).toEqual([]);
    })

    it('adds rollscore returns score', function() {
        expect(scorecard.rollScore(5)).toEqual(5);
    });

    it('rollScore add to score array', function() {
        scorecard.rollScore(6);
        expect(scorecard.storedScores()).toEqual([6]);
    })

    it('throws error is score for first roll is over 10', function() {
        expect(function(){ scorecard.rollScore(11); }).toThrowError('There are only 10 pins silly!');
    });

    it('calculated score', function(){
        scorecard.rollScore(3);
        scorecard.rollScore(5);
        expect(scorecard.calculateScore()).toEqual(8);
    });

});