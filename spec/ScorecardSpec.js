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

    describe('spareBonus', function(){
        it('calculates a total of 84', function(){
          for (let i = 0; i < 19; i++) {
              scorecard.addScore(1, 1, 4);
            }
            scorecard.addScore(10, 2, 6)
            scorecard.addScore(10, 3, 2)
            scorecard.calculate()
            expect(scorecard.total).toEqual(84)
        });
    });

    describe('reset', function(){
        it('sets total to 0 and clears scoreboard', function(){
          for (let i = 0; i < 19; i++) {
              scorecard.addScore(1, 1, 4);
            }
          scorecard.calculate()
          expect(scorecard.total).toEqual(76)
          scorecard.reset()
          expect(scorecard.total).toEqual(0)
          expect(scorecard.scoreboard.length).toEqual(0)
        });
    });
});
