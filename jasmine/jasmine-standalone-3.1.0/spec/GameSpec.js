'use strict';

describe("Bowling Game", function() {
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('A Game contains Frames', function() {
    expect(game.getFrames()).toBeTruthy();
  });
});
