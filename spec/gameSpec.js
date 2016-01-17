(function() {
  'use strict'
}());

describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
    frame = new Frame({ pins: 10, strike: false, spare: false, frameScore: [  ] });
  });

  it("frames should be empty at start of game", function() {
    expect(game.frames).toEqual({})
  });

  xit('start a new frame',function(){
    game.newFrame;
    expect(game.currentFrame).toEqual(frame);
  });

});
