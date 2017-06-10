'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("returns a score of zero for a gutter game", function(){
    game.rolls_current_pins(0);
    expect(game.score()).toEqual(0);
  });
});
