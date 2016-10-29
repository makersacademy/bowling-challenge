'use strict';

describe('Game', function(){
  var game;
  // var frame;

  beforeEach(function(){
    game = new Game();
    // frame = new Frame();
  });

  it('has an initial score of 0', function(){
    expect(game.frameScore).toEqual(0)
  });

  it('can add a bowl score to the frame', function(){
    game.bowl(5);
    game.bowl(1);
    expect(game.frameScore).toEqual(6)
  });

  it('can store each bowls score the frame array', function(){
    game.bowl(5);
    game.bowl(1);
    expect(game.currentFrame).toEqual([5,1])
  });

  it('reduces the bowl count by 1 after each bowl is taken', function(){
    game.bowl(5)
    expect(game.bowlCount).toEqual(1)
  });

  it('holds the games frames', function(){
    game.bowl(1)
    game.bowl(2)
    game.endFrame(game.currentFrame)
    game.bowl(5)
    game.bowl(6)
    game.endFrame(game.currentFrame)
    expect(game.allFrames).toEqual([[1,2],[5,6]])
    expect(game.currentFrame).toEqual([])
  });
});
