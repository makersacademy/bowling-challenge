'use strict';

describe('ScoreCalculator', function() {
  var calculator;
  var roll1;
  var roll2;
  var strike;

  beforeEach(function() {
    calculator = new ScoreCalculator();
    roll1 = 4;
    roll2 = 4;
    strike = 10;
  });

  describe('Strike', function() {
    beforeEach(function(){
      calculator.registerStrike(strike);
    });

    it('adds bonuses to total score from the round after a strike', function() {
      calculator.calculateScore(roll1, roll2);
      var bonus = (roll1 + roll2) * 2;
      expect(calculator.getCurrentScore()).toEqual(strike + bonus);
    });

    it('adds bonuses to total score after two strikes in a row (a double)', function() {
      calculator.registerStrike(strike);
      calculator.calculateScore(roll1, roll2);
      var total = ( (strike+(strike+roll1)) + (strike+(roll1+0) + (roll1+roll2)) );
      expect(calculator.getCurrentScore()).toEqual(total);
    });

    it('adds bonuses to total score after three strikes in a row', function() {
      calculator.registerStrike(strike);
      calculator.registerStrike(strike);
      calculator.calculateScore(0, 9);
      var total = 78;
      expect(calculator.getCurrentScore()).toEqual(total);
    });
  });

  describe('Spare', function() {

    it('It adds bonus when the player gets a spare', function() {
      calculator.registerSpare(roll1 + 6);
      calculator.calculateScore(roll1, 6);
      calculator.calculateScore(roll1, roll2);
      var total = (((roll1*2 + roll2) + 6) + roll1);
      expect(calculator.getCurrentScore()).toEqual(total);
    });
  });

});
