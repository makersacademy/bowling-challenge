'use strict';

describe('Bowling', function() {

  it('can roll gutter game', function() {
    var game = new Bowling();
    for (var i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toBe(0);
  });

  it('can roll all ones', function() {
    var game = new Bowling();
    for (var i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score()).toBe(20);
  });

});