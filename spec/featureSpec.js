'use strict';

describe("feature test", function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it("a ball can be rolled and return a score between 1 & 10", function(){
    var bowl = game.bowl();
    bowl
    expect(game.score).toEqual(bowl);
  });
});
