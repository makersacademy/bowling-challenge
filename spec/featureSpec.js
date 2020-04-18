'use strict';

describe('Feature Test:', function() {
  var game;

  beforeEach(function(){
    game = new Game;
  })

  it('A game starts with a new frame', function() {
    expect(game.getFrame()).toEqual(frame);
  })

  it('When a game rolls a ball, frame score is updated', function() {
    game.bowlBall(4);
    expect(game.getScore()).toEqual(4);
  })

  xit('When a frame is complete, the score is updated', function() {
    game.bowlBall(4);
    game.bowlBall(2)
    expect(game.getScore()).toEqual(6);
  })

})