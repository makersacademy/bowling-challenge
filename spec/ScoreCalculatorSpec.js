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

  it('calculates total score of a simple frame', function() {
    var total = roll1 + roll2;

    calculator.calculateScore(roll1, roll2);
    expect(calculator.getCurrentScore()).toEqual(total);
  });


  describe('Strike', function() {
    beforeEach(function(){
      calculator.registerStrike(strike);
    });

    it('registers if there is a strike', function() {
      expect(calculator.registerStrike(strike)).toEqual(true);
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

    it('adds bonuses to total score after three strikes in a row (a turkey)', function() {
      calculator.registerStrike(strike);
      calculator.registerStrike(strike);
      calculator.calculateScore(0, 9);
      var total = 78;
      expect(calculator.getCurrentScore()).toEqual(total);
    });
  });

  describe('Spare', function() {

    it('registers if there is a spare', function() {
      expect(calculator.registerSpare(4+6)).toEqual(true);
    });

    it('It adds bonus when the player gets a spare', function() {
      calculator.registerSpare(roll1 + 6);
      calculator.calculateScore(roll1, 6);
      calculator.calculateScore(roll1, roll2);

      var total = (((roll1*2 + roll2) + 6) + roll1);
      expect(calculator.getCurrentScore()).toEqual(total);
    });
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

});
