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

  it ('will calculate strikes correctly', function () {
    game.rollBall(10);
    for (var i = 0; i < 18; i++) {
      game.rollBall(1)
    }
    expect(game.score()).toBe(30)
  });

  it ('will calculate two strikes in a row correctly', function () {
    game.rollBall(10);
    game.rollBall(10);
    for (var i = 0; i < 16; i++) {
      game.rollBall(1)
    }
    expect(game.score()).toBe(49)
  });
  it ('will calculate three strikes in a row correctly', function () {
    game.rollBall(10);
    game.rollBall(10);
    game.rollBall(10);
    for (var i = 0; i < 14; i ++) {
      game.rollBall(1)
    }
    expect(game.score()).toBe(77)
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

  it ('will calculate a perfect game correctly', function () {
    for (var i = 0; i < 12; i++) {
      game.rollBall(10)
    }
    expect(game.score()).toBe(300)
  });


  it ('will return the individual frame scores correctly', function () {
    game.rollBall(1);
    game.rollBall(1);
    game.rollBall(1);
    game.rollBall(1);
    expect(game.frames[0]).toBe(2)
    expect(game.frames[1]).toBe(4)
  });

});
