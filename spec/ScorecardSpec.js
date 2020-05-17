describe('ScoreCard', function () {
    'use strict';
    var scorecard;
    beforeEach(function () {
        scorecard = new ScoreCard();
    })
    describe('addScore', function(){
        it('adds score from round to array as hash', function () {
            scorecard.addScore(1, 1, 4);
            expect(scorecard.scoreboard).toEqual([{frame: 1, roll: 1, knocked: 4}]);
        });
    });
    describe('calculate', function(){
        it('calculates the total', function(){
            for (let i = 0; i < 10; i++) {
                scorecard.addScore(1, 1, 4);
              }
            scorecard.calculate()
            expect(scorecard.total).toEqual(40)
        });
    });
});
