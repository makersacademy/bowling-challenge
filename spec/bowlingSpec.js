'use strict';

describe('Bowling scorer', function() {

  var game;

  var rollMany = function(points, rolls) {
    for (var i = 0; i < rolls; i++) {
      game.roll(points);
    }
  };

  beforeEach(function() {
    game = new BowlingScorer();
  });

  it('is able to roll a gutter game', function() {
    rollMany(0, 20);
    expect(game.score()).toEqual(0);
  });

  it('is able to roll a spare', function() {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMany(0, 17);
    expect(game.score()).toEqual(16);
  });

  it('is able to roll a strike', function() {
    game.roll(10);
    game.roll(4);
    game.roll(3);
    rollMany(0, 16);
    expect(game.score()).toEqual(24);
  });

  it('is able to roll a perfect game', function() {
    rollMany(10, 12);
    expect(game.score()).toEqual(300);
  });

});
