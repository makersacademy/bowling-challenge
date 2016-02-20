'use strict';

describe("Game", function() {

    var game;
    var player;

  beforeEach(function() {
    player = new Player;
    game = new Game(player);
  });

  it("has an empty record of frames played", function() {
    expect(game.frames).toEqual([]);
  });

  it("has a total score for the game", function() {
    expect(game.totalScore).toEqual(0);
  });

  it("has a player", function() {
    expect(game.player).toEqual(new Player)
  });

  describe("addFrame", function() {
    it("creates a frame", function(){
      game.addFrame();
      expect(game.frames).toContain(new Frame)
    });
  });

});
