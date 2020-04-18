'use strict';

describe('Feature Test:', function() {
  var game;
  var frame;

  beforeEach(function(){
    game = new Game;
    frame = new Frame();
  })

  it('A game starts with a new frame', function() {
    expect(game.getFrame()).toEqual(frame);
  })

})