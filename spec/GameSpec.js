'use strict';

describe("Game", function() {

    var game;
    var player;
    var frame;

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

  describe("addFrame", function() {

    it("adds a frame", function(){
      player.firstBowl();
      game.addFrame(frame)
      expect(game.frames).toContain(frame)
    });


  });

});
