describe('Game', function () {
  'use strict';

  var game;

  beforeEach (function () {
    game = new Game()
  });


  it ('will have a score of 0 if all gutterballs', function () {
    for (var i = 0; i < 20; i++) {
      game.rollBall(0)
    }
    expect(game.score()).toBe(0);
  });

  it ('will have a score of 20 if all balls score 1', function () {
    for (var i = 0; i < 20; i++) {
      game.rollBall(1)
    }
    expect(game.score()).toBe(20);
  });

  it ('will calculate spares correctly', function () {
    game.rollBall(3);
    game.rollBall(7);
    for (var i = 0; i < 18; i++) {
      game.rollBall(1)
    }
    expect(game.score()).toBe(29)
  }); 

  it ('will calculate all spares and five correctly', function () {
    for (var i = 0; i < 20; i++) {
      game.rollBall(5)
    }
    game.rollBall(5);
    expect(game.score()).toBe(150)
  });


  it ('will calculate strikes correctly', function () {
    game.rollBall(10);
    for (var i = 0; i < 18; i++) {
      game.rollBall(1)
    }
    expect(game.score()).toBe(30)
  });

  describe ('after two strikes', function () {
    beforeEach (function() {
      game.rollBall(10);
      game.rollBall(10);
    });

    it ('will calculate score correctly', function () {
      for (var i = 0; i < 16; i++) {
        game.rollBall(1)
      }
      expect(game.score()).toBe(49)
    });
    it ('will calculate another strike in a row correctly', function () {
      game.rollBall(10);
      for (var i = 0; i < 14; i ++) {
        game.rollBall(1)
      }
      expect(game.score()).toBe(77)
    });
  });

  it ('will calculate a mix of strikes and spares correctly', function () {
    game.rollBall(10);
    game.rollBall(7);
    game.rollBall(3);
    game.rollBall(7);
    game.rollBall(2);
    game.rollBall(10);
    game.rollBall(3);
    game.rollBall(7);
    game.rollBall(10);
    game.rollBall(7);
    game.rollBall(3);
    game.rollBall(10);
    game.rollBall(1);
    game.rollBall(1);
    game.rollBall(1);
    game.rollBall(1);
    expect(game.score()).toBe(142)
  });

  describe ('will not accept', function () {
    it ('when given number above 10', function () {
      expect(game.rollBall(11)).toContain("that is not a valid entry");
    });

    it ('when given negative number', function ()  {
     expect(game.rollBall(-1)).toContain("that is not a valid entry");
    });

    it ('when given float', function () {
      expect(game.rollBall(1.1)).toContain("that is not a valid entry");
    });

    it ('when given string', function () {
      expect(game.rollBall('blah')).toContain("that is not a valid entry");
    });
  });
});
