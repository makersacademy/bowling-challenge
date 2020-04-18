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

  it('When a frame is complete, the score is updated', function() {
    frame.bowlBall(4);
    frame.bowlBall(2)
    expect(game.getScore()).toEqual(6);
  })

})