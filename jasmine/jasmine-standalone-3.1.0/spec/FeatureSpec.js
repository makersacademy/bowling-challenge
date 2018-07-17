'use strict';

describe("Feature Test: ", function() {
  var game;
  var score;

  beforeEach(function(){
    game = new Game();
    score = new Score();
  });

  describe('User can score points in a Frame', function() {
    it('A User can roll and score points', function() {
      game.roll(1);
      game.roll(4);
      expect(game.getScore()).toEqual(5);
    });
  });

  describe('User can score addtional Bonus points', function() {
    it('A User can roll 10 pins in Frame and score bonus points', function() {
      game.roll(6);
      game.roll(4);
      game.roll(5);
      game.roll(3);
      expect(game.getScore()).toEqual(23);
    });

    it('A User can roll all 10 pins or Strikes multiple times and score' +
    'bonus points, variation 1', function() {
      game.roll(1);
      game.roll(4);
      game.roll(4);
      game.roll(5);
      game.roll(6);
      game.roll(4);
      game.roll(5);
      game.roll(5);
      game.roll(10);
      game.roll(0);
      game.roll(0);
      game.roll(1);
      game.roll(7);
      game.roll(3);
      game.roll(6);
      game.roll(4);
      game.roll(10);
      game.roll(0);
      game.roll(2);
      game.roll(8);
      expect(game.getScore()).toEqual(127);
    });

    it('A User can roll all 10 pins or Strikes multiple times and score' +
    'bonus points, variation 2', function() {
      game.roll(1);
      game.roll(9);
      game.roll(2);
      game.roll(3);
      game.roll(10);
      game.roll(0);
      game.roll(3); // 10
      game.roll(0);
      game.roll(3); // 10
      game.roll(0);
      game.roll(2);
      game.roll(8);
      game.roll(9);
      game.roll(0);
      game.roll(1);
      game.roll(3);
      game.roll(2);
      game.roll(2);
      game.roll(3);
      game.roll(3);
      expect(game.getScore()).toEqual(78);
    });

    it('A User can roll all 10 pins or Strikes multiple times and score' +
    'bonus points, variation 3', function() {
      game.roll(1);
      game.roll(9);
      game.roll(2);
      game.roll(3);
      game.roll(10);
      game.roll(0);
      game.roll(3); // 10
      game.roll(0);
      game.roll(2); // 10
      game.roll(0);
      game.roll(2);
      game.roll(8);
      game.roll(9);
      game.roll(0);
      game.roll(1);
      game.roll(3);
      game.roll(2);
      game.roll(2);
      game.roll(3);
      game.roll(3);
      expect(game.getScore()).toEqual(77);
    });

    it('A User can roll all 10 pins or Strikes multiple times and score' +
    'bonus points, variation 4', function() {
      game.roll(1);
      game.roll(9);
      game.roll(2);
      game.roll(3);
      game.roll(10);
      game.roll(0);
      game.roll(10); // 10
      game.roll(0);
      game.roll(3); // 10
      game.roll(0);
      game.roll(2);
      game.roll(8);
      game.roll(9);
      game.roll(0);
      game.roll(1);
      game.roll(3);
      game.roll(2);
      game.roll(2);
      game.roll(3);
      game.roll(3);
      expect(game.getScore()).toEqual(98);
    });

    it('A User can roll all 10 pins or Strikes multiple times and score' +
    'bonus points, variation 5', function() {
      game.roll(1);
      game.roll(9);
      game.roll(2);
      game.roll(3);
      game.roll(10);
      game.roll(0);
      game.roll(10); // 10
      game.roll(0);
      game.roll(3); // 10
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(1);
      game.roll(3);
      game.roll(2);//
      game.roll(2);
      game.roll(3);
      game.roll(3);
      expect(game.getScore()).toEqual(105);
    });

    it('A User can roll all 10 pins or Strikes multiple times and score' +
    'bonus points, variation 6', function() {
      game.roll(1);
      game.roll(9);
      game.roll(2);
      game.roll(3);
      game.roll(10);
      game.roll(0);
      game.roll(10); // 10
      game.roll(0);
      game.roll(3); // 10
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(2);//
      game.roll(2);
      game.roll(3);
      game.roll(3);
      expect(game.getScore()).toEqual(132);
    });

    it('A User can roll all 10 pins or Strikes multiple times and score' +
    'bonus points, variation 7', function() {
      game.roll(1);
      game.roll(9);
      game.roll(2);
      game.roll(3);
      game.roll(10);
      game.roll(0);
      game.roll(10); // 10
      game.roll(0);
      game.roll(3); // 10
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);//
      game.roll(0);
      game.roll(10);
      game.roll(0);
      expect(game.getScore()).toEqual(176);
    });

    it('A User has an extra roll in FINAL FRAME, varation 8', function() {
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(8);
      game.roll(2);
      game.roll(10); // bonus ball for Frame 10

      expect(game.getScore()).toEqual(278);
    });

    it('A User has an extra roll in FINAL FRAME, variation 9', function() {
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(0);
      game.roll(10);
      game.roll(10); // bonus ball for Frame 10

      expect(game.getScore()).toEqual(270);
    });

    it('A User has an extra roll in FINAL FRAME, variation 10', function() {
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(0);
      game.roll(0);
      game.roll(0); // bonus ball for Frame 10

      expect(game.getScore()).toEqual(240);
    });

    it('A User has an extra roll in FINAL FRAME, variation 11', function() {
      game.roll(0);
      game.roll(10);
      game.roll(9);
      game.roll(0);
      game.roll(9);
      game.roll(0);
      game.roll(9);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);//
      game.roll(3);
      game.roll(6);
      game.roll(0);
      game.roll(10);
      game.roll(10);
      game.roll(2);
      game.roll(0); // bonus ball for Frame 10

      expect(game.getScore()).toEqual(161);
    });

    it('A User has an extra roll in FINAL FRAME, variation 12', function() {
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(0);
      game.roll(0); // bonus ball for Frame 10

      expect(game.getScore()).toEqual(230);
    });

    // in a Perfect game, user has 2 bonus strike in Game 10
    it('A User can roll 12 strikes in a PERFECT GAME and score maximum points'
    , function() {
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(0);
      game.roll(10);
      game.roll(10);
      game.roll(10); // bonus ball for Frame 10

      expect(game.getScore()).toEqual(300);
    });

    it('A User can roll 0 pins in a GUTTER GAME and score 0 points',
      function() {
      for (var i = 0; i <= 20; i++) {
        game.roll(0);
      }
      expect(game.getScore()).toEqual(0);
    });
  });

  describe('Game status', function() {
    it('A Game is over when 20 rolls are played', function() {
      for (var i = 0; i < 20; i++) {
        game.roll(1);
      }
      expect(game.gameOver()).toBeTruthy();
    });

    it('A Game is over when 10 frames are played', function() {
      for (var i = 0; i < 10; i++) {
        game.addFrame();
      }
      expect(game.gameOver()).toBeTruthy();
    });
  });

  describe('Reset Game', function() {
    it('A User can play a game after resetting the game to start again',
     function() {
      for (var i = 0; i < 10; i++) {
        game.addFrame();
      }
      game.resetGame();
      expect(game.gameOver()).toBeFalsy();
    });
  });
});
