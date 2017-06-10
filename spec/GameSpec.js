'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("rolls a gutter game", function(){
    for (var roll = 0; roll < 20; roll++) { game.rolls_current_pins(0); };
    expect(game.stored_pins).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  });

  it("returns a score of zero for a gutter game", function(){
    for (var roll = 0; roll < 20; roll++) { game.rolls_current_pins(0); };
    expect(game.score()).toEqual(0);
  });
});
