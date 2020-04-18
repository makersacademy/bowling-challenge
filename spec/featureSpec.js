'use strict';

describe('Feature Test:', function() {
  var game;
  var frame;

  beforeEach(function(){
    game = new Game;
    frame = new Frame;
  })

  it('A game starts with a new frame', function() {
    expect(game.currentFrame()).toEqual(frame);
  })

  it('When a game rolls a ball, frame score is updated', function() {
    game.bowlBall(4);
    expect(game.getFrameScore()).toEqual(4);
  })

  it('When a frame is complete, a new frame is created', function() {
    game.bowlBall(4);
    game.bowlBall(5);
    expect(game.getFrameCount()).toEqual(2);
  })
})