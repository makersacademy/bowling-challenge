"use strict";

describe("Game", function() {
  var game;
  var frame;

  beforeEach(function(){
    game = new Game();
    frame = new Frame();
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

  it("stores each frame", function() {
    game.play()
    expect(game.frames[0].length).toEqual(2)
  })

describe("displays game result", function() {

  it("a game of 0 scores a Gutter Game", function() {
    spyOn(game, "play").and.returnValue([0, 0]);
    for(var i = 0; i < 10; i ++) {
      game.play();
    };
    expect(game.result()).toEqual("Gutter Game!")
  });

  })
})
