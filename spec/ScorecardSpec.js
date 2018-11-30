'use strict';

describe('Scorecard:', function() {
  var game;

  beforeEach(function() {
    game = new Scorecard();
  });

  it('starts with a score of 0', function() {
    expect(game.score()).toEqual(0);
  });

  it('starts with a 10 pins standing', function() {
    expect(game.pins()).toEqual(10);
  });

  it('throw_1 hitting 5 to increase score by 5', function() {
    game.throw_1(5);
    expect(game.score()).toEqual(5);
  });

  it('throw_1 hitting 5 to decrease pins by 5', function() {
    game.throw_1(5);
    expect(game.score()).toEqual(5);
  });
});
