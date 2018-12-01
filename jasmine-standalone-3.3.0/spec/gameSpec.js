'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });


  it('will start with one frame', function() {
    game.roll();
    expect(game.frames.length).toEqual(1)
    console.log(game.frames);
  });
});
