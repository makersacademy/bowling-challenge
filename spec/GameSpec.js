'use strict';

describe("Game", function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it("should add all the frames into an array names game", function(){
    game.addFrame()
    game.frames[0].getFirstBowl(4);
    game.frames[0].getSecondBowl(3);
    game.addFrame()
    game.frames[1].getFirstBowl(2);
    game.frames[1].getSecondBowl(6);
    expect(game.frames.length).toEqual(2)
  });

  it("should not have more than 10 frames in", function() {
    for(var i = 0; i < 10; i++) {
      game.addFrame()} expect(function(){game.addFrame();}).toThrow("You can only have 10 frames")
  });
});
