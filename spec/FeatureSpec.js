'use strict';

describe('Feature Tests', function(){
  var scoreboard;
  var calculator;
  var hits;
  var roll1 = 4;
  var roll2 = 4;
  var strike = 10;

  beforeEach(function(){
    calculator = new ScoreCalculator();
    scoreboard = new Scoreboard(calculator);
    hits = 4;
  });

  it('calculates total score of a simple frame', function() {
    var total = roll1 + roll2;
    calculator.calculateScore(roll1, roll2);
    expect(calculator.getCurrentScore()).toEqual(total);
  });

  it('registers if there is a spare', function() {
    expect(calculator.registerSpare(4+6)).toEqual(true);
  });

  it('registers if there is a strike', function() {
    expect(calculator.registerStrike(strike)).toEqual(true);
  });

  describe('Gutter game', function() {

    it('Returns a total score of 0', function() {
      for (var i = 10; i > 0; i--){
        calculator.calculateScore(0, 0);
      }
      expect(calculator.getCurrentScore()).toEqual(0);
    });
  });

  describe('Perfect Game', function() {
    it('Returns a total score of 300', function() {
      for (var i = 9; i > 0; i--){
        calculator.registerStrike(10);
        calculator.calculateScore(10, null);
      }
      calculator.calculateScore(10, 10, 10);
      expect(calculator.getCurrentScore()).toEqual(300);
    });
  });

  describe('Final frame', function() {
    beforeEach(function(){
      for (var i = 9; i > 0; i--){
        scoreboard.saveFirstRoll(hits);
        scoreboard.saveSecondRoll(hits);
      }
    });

    it('10th frame strike with two rolls', function() {
      scoreboard.saveFirstRoll(10);
      expect(Object.keys(scoreboard.frames[9]).length).toEqual(3);
      scoreboard.saveSecondRoll(10);
      scoreboard.saveThirdRoll(10);
      expect(calculator.getCurrentScore()).toEqual(102);
    });

    it('10th frame spare two rolls', function() {
      scoreboard.saveFirstRoll(5);
      expect(Object.keys(scoreboard.frames[9]).length).toEqual(2);
      scoreboard.saveSecondRoll(5);
      expect(Object.keys(scoreboard.frames[9]).length).toEqual(3);
      scoreboard.saveThirdRoll(5);
      expect(calculator.getCurrentScore()).toEqual(87);
    });
  });
});
