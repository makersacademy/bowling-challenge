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

  it("rolls a game with no strikes or spares", function() {
    for (var roll = 0; roll < 20; roll++) { game.rolls_current_pins(1); };
    expect(game.stored_pins).toEqual([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  });

  it("returns a score of 20 for a game where 1 is rolled each time", function(){
    for (var roll = 0; roll < 20; roll++) { game.rolls_current_pins(1); };
    expect(game.score()).toEqual(20);
  });

});
