'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('has a total of 10 frames', function() {
    expect(game.start()).toEqual(10);
  });


});
