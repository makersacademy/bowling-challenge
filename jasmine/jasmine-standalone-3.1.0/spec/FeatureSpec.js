'use strict';

describe("Feature Test: ", function() {
  var game;
  var calc;

  beforeEach(function(){
    game = new Game();
    calc = new CalculateScore();
  });

  describe('User can score points in a Frame', function() {
    it('A User can roll and score points', function() {
      game.roll(1);
      game.roll(4);
      expect(game.score()).toEqual(5);
    });
  });

  it('A User can roll a Strike and score 10 points', function() {
    calc.calculateScore(10);
    expect(calc.getScore()).toEqual(10);
  });

  // describe('User can score addtional Bonus points for Spare', function() {
  //   it('A User can roll 10 pins, score 10 points + bonus points', function() {
  //     calc.calculateStrikeScore(10);
  //     expect(calc.getScore()).toEqual(15);
  //   });
  // });
});
