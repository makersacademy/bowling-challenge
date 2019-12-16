'use strict';

describe("Game of Bowling", function() {

  var game;
  var i;

  beforeEach(function(){
    game = new Game();
  });

  it("calculates a perfect game", function() {
    generateFrames([10], [10,10,10]);
    expect(game.score()).toEqual(300);
  });

  it("calculates a normal game", function() {
    generateFrames([1,3]);
    expect(game.score()).toEqual(40);
  });

  it("calculates a gutter game", function() {
    generateFrames([0,0]);
    expect(game.score()).toEqual(0);
  });

  function generateFrames(frame, final_frame) {
    for(i = 0; i < 9; i++) {
      game.roll(frame);
    }
    game.roll(final_frame || frame);
  }
});