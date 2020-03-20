'use strict';

describe("Game", function (){
  var game;
  var frame1;

  beforeEach(function(){
    game = new Game();
    frame1 = new Frame();
  });

  it("adds a players name", function() {
    game.addPlayer('Luke');
    expect(game.playername).toEqual("Luke");
  });

  it("has a default score of 0", function() {
    expect(game.score).toBe(0)
  });
});

