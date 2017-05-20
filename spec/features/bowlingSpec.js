'use strict';

describe("Feature Tests", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('calculates basic scores', function() {
    game.bowl(4);
    game.bowl(5);
    expect(game.totalScore).toEqual(9);
  });
});
