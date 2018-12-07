'use strict';

describe('Game', function() {
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('it should have 10 frames by default', function() {
    expect(game.frames).toEqual(10);
  });
})
