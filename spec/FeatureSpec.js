'use strict';

describe('Feature Test:', function(){
  var scoreboard;
  var calculator;
  var hits;

  beforeEach(function(){
    calculator = new ScoreCalculator();
    scoreboard = new Scoreboard(calculator);
    hits = 4;
  });

  describe('Last frame', function() {
    beforeEach(function(){
      for (var i = 9; i > 0; i--){
        scoreboard.saveFirstRoll(hits);
        scoreboard.saveSecondRoll(hits);
      }
    });

    it('lets the player roll two more times in 10th frame if the player had a strike', function() {
      scoreboard.saveFirstRoll(10);
      expect(Object.keys(scoreboard.frames[9]).length).toEqual(3);

      scoreboard.saveSecondRoll(10);
      scoreboard.saveThirdRoll(10);
      expect(calculator.getCurrentScore()).toEqual(102);
    });

    it('lets the player to roll two more times in 10th frame if the player had a spare', function() {
      scoreboard.saveFirstRoll(5);
      expect(Object.keys(scoreboard.frames[9]).length).toEqual(2);

      scoreboard.saveSecondRoll(5);
      expect(Object.keys(scoreboard.frames[9]).length).toEqual(3);

      scoreboard.saveThirdRoll(5);
      expect(calculator.getCurrentScore()).toEqual(87);
    });
  });
});
