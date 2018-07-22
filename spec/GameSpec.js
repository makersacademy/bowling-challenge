'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('can roll Gutter game', function() {
    rollMany(0, 20);
    expect(game.score()).toEqual(0);
  });

  it('can roll all ones', function() {
    rollMany(1, 20);
    expect(game.score()).toEqual(20);
  });

  it('can roll Spare game', function() {
    game.roll(3);
    game.roll(7);
    game.roll(6);
    rollMany(0, 17);
    expect(game.score()).toEqual(22);
  });

  it('can roll Strke game', function() {
    game.roll(10);
    game.roll(6);
    game.roll(2);
    rollMany(0, 16);
    expect(game.score()).toEqual(26);
  });

  it('can roll Perfect game', function() {
    rollMany(10, 12);
    expect(game.score()).toEqual(300);
  });

  var rollMany = function(pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins)
    }
  };

});
