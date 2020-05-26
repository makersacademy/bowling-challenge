describe('ScoreCard', function () {
    'use strict';
    var scorecard;
    beforeEach(function () {
        scorecard = new ScoreCard();
    });

    describe('calculate', function(){
        it('changes total from 0 to 5', function(){
          scorecard.calculate(5);
          expect(scorecard.total).toEqual(5);
        });

        it('adds 5 to totalArray', function(){
          scorecard.calculate(5);
          expect(scorecard.totalArray[scorecard.totalArray.length - 1]).toEqual(5)
        });
    });

    describe('updateScoreboard', function(){
        it('adds frame, roll and knocked pins to scoreboard', function(){
          scorecard.updateScoreboard(1, 1, 5);
          expect(scorecard.scoreboard).toEqual([{frame: 1, roll: 1, knocked: 5}]);
        });

        it('adds knocked pins to rollArray', function(){
          scorecard.updateScoreboard(1, 1, 5);
          expect(scorecard.rollArray).toEqual([5]);
        });
    });
  });
