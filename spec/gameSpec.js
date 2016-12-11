'use strict';

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

it('should have a default value of 10 frames', function() {
  expect(game._frames).toEqual(10);
})


});
