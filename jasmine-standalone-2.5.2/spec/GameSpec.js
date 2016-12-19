'use strict';

describe("Game", function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
  });

  it("tells the frame to add pins", function() {
    spyOn(game.currentFrame, 'addToFrame');
    game.roll(1);
    expect(game.currentFrame.addToFrame).toHaveBeenCalledWith(1);
  })




});
