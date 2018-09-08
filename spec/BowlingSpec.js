'use strict';

describe("Bowling", function() {
  var game;

  beforeEach(function(){
    game = new BowlingGame;
  });

  it("should allow a player to input a score", function() {
    game.addPoints(4);
    expect(game.scores).toContain(4);
  });

  it("should calculate score total", function() {
    game.addPoints(4);
    game.addPoints(5);
    expect(game.total()).toEqual(9);
  });

});