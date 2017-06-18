'use strict'

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('can start a new game with a score of 0', function(){
    expect(game.score).toEqual(0);
  });

  it('starts with a frameCount of 0', function(){
    expect(game.frameCount).toEqual(0);
  })

  it('can add a new frame to a game', function(){
    game.addFrame();
    expect(game.frameCount).toEqual(1);
  })
});
