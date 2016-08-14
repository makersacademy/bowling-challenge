'use strict';

describe('BowlingGame', function() {
  var game;

  beforeEach(function() {
    game = new BowlingGame();
  });

  function rollMany(n, pins) {
    for(var i = 0; i < n; i++) {
      game.roll(pins);
    }
  }

  function rollSpare() {
    rollMany(2,5);
  }

  function rollStrike() {
    game.roll(10);
  }

  it('can handle a gutter game', function() {
    rollMany(20,0)
    expect(game.score()).toEqual(0);
  });

  it('can handle a game of ones', function() {
    rollMany(20,1)
    expect(game.score()).toEqual(20);
  });

  it('can handle one spare', function() {
    rollSpare();
    game.roll(3);
    rollMany(17,0);
    expect(game.score()).toEqual(16);
  });

  it('can handle one strike', function() {
    rollStrike();
    game.roll(3);
    game.roll(4);
    rollMany(16, 0);
    expect(game.score()).toEqual(24);
  });

  it('can handle a perfect game', function() {
    rollMany(12,10);
    expect(game.score()).toEqual(300);
  });

  it('can return the current score', function() {
    rollMany(4,1);
    expect(game.currentScore()).toEqual(4);
  });

  it('returns a random number between 0 and 10', function() {
    spyOn(Math, 'random').and.returnValue(0.1);
    expect(game.random()).toEqual(1);
  });

  it('increments the current frame by 1 when the frame is over', function() {
    game.roll(2);
    expect(game.currentFrame).toEqual(1);
    game.roll(4);
    expect(game.currentFrame).toEqual(2);
    rollStrike();
    expect(game.currentFrame).toEqual(3);
  });

  it('reduces the remaining pins of the frame by the roll', function() {
    game.roll(1);
    expect(game.remainingPins).toEqual(9);
  });

  it('resets the remaining pins to 10 after frame ends', function() {
    game.roll(1);
    game.roll(1);
    expect(game.remainingPins).toEqual(10);
    rollStrike();
    expect(game.remainingPins).toEqual(10);
  });

});
