'use strict';

describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("starts a game with a 10 frames maximum", function() {
    expect(game.MAX_FRAMES).toEqual(10);
  });

  it("starts a game with 10 pins", function() {
    expect(game.gamePins).toEqual(10);
  });

  it("starts the game with a score of 0", function() {
    expect(game.getCurrentScore()).toEqual(0);
  });

  it ("ends the game after 10 frames", function() {
    game.currentFrame;
    for (var i = 0; i < 10; i++) {
      game.playFrame();
    }
    expect(function(){ game.playFrame(); }).toThrowError("Game Over");
  });

  it('confirms each play function plays a frame', function(){
    game.playFrame();
    expect(game.currentFrame).toEqual(1);
  });

  it("updates the score", function () {
    game.updateScore(4);
    expect(game.getCurrentScore()).toEqual(4);
  });

  it("tracks the current frame", function() {
    game.bowl(0);
    expect(game.getCurrentFrame()).toBe(game.frames[1]);
  });
});
