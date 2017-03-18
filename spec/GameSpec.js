"use strict";

describe("Game", function() {
  var game;

  beforeEach(function(){
    game = new Game();
  })

  it("starts a new game when the player chooses", function(){
    game.newGame()
    expect(game.frames.length).toEqual(0);
  })

  it("stores each frame a player bowls", function(){
    game.play();
    expect(game.frames.length).toEqual(1);
  });

  it("the game ends when the player has bowled 10 frames", function(){
    for(var i = 0; i < 10; i ++) {
      game.play();
    };
    expect(game.isGameFinished()).toEqual("Game has finished!");
  });

  // it("stores each frame", function() {
  //   game.play()
  //   expect(game.frames).toContain(["2", "7"])
  // })
})
