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

  describe('User can score addtional Bonus points', function() {
    it('A User can roll 10 pins in Frame and score bonus points', function() {
      game.roll(6);
      game.roll(4);
      game.roll(5);
      game.roll(3);
      game.getBonus();
      expect(game.score()).toEqual(23);
    });

    it('A User can roll all 10 pins or Strikes multiple times and score bonus points', function() {
      game.roll(1);
      game.roll(4); //
      game.roll(4);
      game.roll(5); //
      game.roll(6);
      game.roll(4); // bonus
      game.roll(5);
      game.roll(5); //
      game.getBonus(); // bonus 5
      game.roll(10);
      game.roll(0);//
      game.getBonus(); // bonus 10
      game.roll(0);
      game.roll(1);//
      game.getBonus(); // bonus 1
      game.roll(7);
      game.roll(3);// bonus
      game.roll(6);
      game.roll(4);//
      game.getBonus(); // bonus 6
      game.roll(10);
      game.roll(0);//
      game.getBonus(); // bonus 10
      game.roll(2);
      game.roll(8);//
      game.getBonus(); // bonus 10
      expect(game.score()).toEqual(127);
    });

    it('A User can roll 10 strikes in a PERFECT GAME and score maximum points', function() {
      for (var i = 0; i < 5; i++) {
        game.roll(10);
        game.roll(10);
        game.roll(10);
        game.roll(10);
        game.getBonus();
      }
      expect(game.score()).toEqual(300);
    });

    it('A User can roll 0 pins in a GUTTER GAME and score 0 points', function() {
      for (var i = 0; i < 20; i++) {
        game.roll(0);
      }
      expect(game.score()).toEqual(0);
    });
  });
});
