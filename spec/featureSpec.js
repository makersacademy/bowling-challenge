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

  it('The game score is a total of all frame scores', function() {
    game.bowlBall(4);
    game.bowlBall(5);
    game.bowlBall(2);
    game.bowlBall(6);
    expect(game.getScore()).toEqual(17);
  })
})