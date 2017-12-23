'use strict';

describe("Game", function() {

  var game

  beforeEach(function() {
    game = new Game();
  })

  it("should initialise with a score of zero", function() {
    expect(game.score).toEqual(0);
  })
  // describe("next frame", function() {
  //
  // })
})
