'use strict';

describe("Game", function() {

  var game;
  var currentFrame;

  beforeEach(function() {
    game = new Game();
  });

  // this is a feature spec

  it("gutter game score is zero", function() {
    expect(game.finalScore()).toEqual(0);
  });

  it("1 point per frame equals 10", function() {
    for (var i = 1; i <= 10; i++) {
    game.recordFrame(1);
    }
    expect(game.finalScore()).toEqual(10);
  });

  it("1 point per roll equals 20", function() {
    for (var i = 1; i <= 10; i++) {
        currentFrame = new Frame();
        currentFrame.recordRoll(1)
        currentFrame.recordRoll(1)
        game.recordFrame(frame.Score());
    }
    expect(game.finalScore()).toEqual(20);
  });



});
