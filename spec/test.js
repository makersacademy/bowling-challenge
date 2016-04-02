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
});
