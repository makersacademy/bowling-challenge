'use strict';

describe ('game', function() {
  var game_object;
  var frame_test;

  beforeEach(function() {
    game_object = new Game()
  });
  it('loads something into the game object', function() {
    frame_test = new Frame(3,6);
    expect(game_object.loadFrame(frame_test)).toMatch("ok");
  });
});
