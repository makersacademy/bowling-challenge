'use strict';

describe('Game', function() {
  var frame;
  var game;
  var pin;

  beforeEach(function() {
    frame = new Frame();
    game = new Game();
    pin = new Pin();
  });

it('should contain 10 frames in a new game', function() {
  game.start();
  expect(game.frames.length).toEqual(10);
});

});
