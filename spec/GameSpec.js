"use strict";

describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('returns a 0 points game for all gutter balls', function() {
    roll(20, 0);
    expect(game.score()).toEqual(0);
  });

  it('returns a 20 points game for 1 point rolls', function() {
    roll(20, 1);
    expect(game.score()).toEqual(20);
  });

  it('can roll a spare', function() {
    roll(1, 5);
    roll(1, 5);
    roll(1, 2);
    roll(17, 0);
    expect(game.score()).toEqual(14);
  });

  it('can roll a strike', function() {
    roll(1, 10);
    roll(1, 2);
    roll(1, 2);
    roll(17, 0);
    expect(game.score()).toEqual(18);
  });

  // it('can roll a regular game', function() {
  //   roll(1, 10);
  //   roll(1, 2);
  //   roll(1, 2);
  //   roll(17, 0);
  //   expect(game.score()).toEqual(18);
  // });

  it('rolls a game of all strikes', function() {
    roll(12, 10);
    expect(game.score()).toEqual(300);
  });

  function roll(times, pinsDown) {
    for (var i = 0; i < times; i++) {
      game.roll(pinsDown);
    }
  }

});
