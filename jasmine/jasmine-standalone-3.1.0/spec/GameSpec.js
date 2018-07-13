'use strict';

describe("Bowling Game", function() {
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('A Game contains Frames', function() {
    expect(game.getFrames()).toBeTruthy();
  });

  it('A User can Roll 2 times per Frame', function() {
    game.roll();
    game.roll();
    game.roll();
    expect(game.getFrames()).toEqual(['X']);
  });

  // it('A User can Roll 20 times per Game', function() {
  //   game.roll();
  //   game.roll();
  //   game.roll();
  //   expect(game.getFrames()).toEqual(['X'], ['X']);
  // });

});
