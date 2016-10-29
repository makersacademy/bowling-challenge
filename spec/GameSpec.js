'use strict';

var game;

describe("Game", function() {

  beforeEach(function() {
    game = new Game();
  });

  it('expects a new game to start with 0 points', function() {
    expect(game.newGame()).toEqual(0);
  });

  it('returns a 0 points game for all gutter balls', function() {
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score).toEqual(0);
  });

  it('returns a 20 points game for 1 point rolls', function() {
    for (var i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score).toEqual(20);
  })

  // it('rolls a spare following by a two, then all gutter balls', function() {
  //   game.roll(5);
  //   game.roll(5);
  //   game.roll(2);
  //   expect(game.score).toEqual(14);
  // });



  // function roll(times, pinsDown) {
  //   for (var i = 0; i < times, i++) {
  //     game.roll(pinsDown);
  //   }
  // }
});
