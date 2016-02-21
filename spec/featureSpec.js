'use strict';

describe("feature test", function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it("a ball can be rolled and return a score between 1 & 10", function(){
    var bowl = game.Bowl();
    bowl
    expect(game.Score).toEqual(bowl);
  });

  it("a game can record the amount of frames played", function(){
    game.Bowl();
    game.Bowl();
    expect(game.FrameCount).toEqual(1);
  });
});
