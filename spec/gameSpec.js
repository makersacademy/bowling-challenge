'use strict'

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('can start a new game with a score of 0', function(){
    expect(game.score).toEqual([]);
  });

  it('starts with a frameCount of 0', function(){
    expect(game.frameCount).toEqual(0);
  });
  it('can add a new frame to a game', function(){
    game.addFrame();
    expect(game.frameCount).toEqual(1);
  });
  it('a game will have 9 frames before calling the last frame', function(){
    game.runGame();
    expect(game.frameCount).toEqual(9);
  });
  // it('calls the last frame', function(){
  //   expect(game.lastFrame).toBeDefined()
  // })
});
