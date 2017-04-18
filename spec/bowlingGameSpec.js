'use strict';

describe('BowlingGame', function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  function rollMany(n, pins) {
    for(var i = 0; i < n; i++) {
      game.roll(pins)
    }
  };

  function rollSpare(firstRoll, secondRoll) {
    game.roll(firstRoll);
    game.roll(secondRoll);
  };

  function rollStrike() {
    game.roll(10);
  };

  it('can roll a gutter game', function() {
    rollMany(20, 0);
    expect(game.score()).toEqual(0);
  });

  it('can roll all ones', function() {
    rollMany(20, 1);
    expect(game.score()).toEqual(20);
  });

  it('can roll a spare', function() {
    rollSpare(5, 5);
    game.roll(2);
    rollMany(17, 0);
    expect(game.score()).toEqual(14);
  });

  it('can roll a strike', function() {
    rollStrike();
    game.roll(2);
    game.roll(3);
    rollMany(16, 0);
    expect(game.score()).toEqual(20);
  });

  it('can roll a perfect game', function() {
    rollMany(12, 10);
    expect(game.score()).toEqual(300);
  });

  it('can roll a combination of pins', function() {
    game.roll(1);
    game.roll(4);

    game.roll(4);
    game.roll(5);

    rollSpare(6, 4);

    rollSpare(5, 5);

    rollStrike();

    game.roll(0);
    game.roll(1);

    rollSpare(7, 3);

    rollSpare(6, 4);

    rollStrike();

    rollSpare(2, 8);
    game.roll(6);

    expect(game.score()).toEqual(133);
  });
});