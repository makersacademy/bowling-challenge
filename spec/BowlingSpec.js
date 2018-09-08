'use strict';

describe("Bowling", function() {
  var game;

  beforeEach(function(){
    game = new BowlingGame;
  });

  it("should add bonus to score after spare", function() {
    game.addPoints(9);
    game.addPoints(1);
    game.addPoints(5);
    game.addPoints(2);
    expect(game.total()).toEqual(22);
  });

  it("should add bonus to score after strike", function() {
    game.addPoints(10);
    game.addPoints(1);
    game.addPoints(5);
    game.addPoints(2);
    expect(game.total()).toEqual(24);
  });

});