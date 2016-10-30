'use strict';

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('has an initial score of 0', function(){
    expect(game.frameScore).toEqual(0)
  });

  it('can add a bowl score to the current frame', function(){
    game.bowl(5);
    game.bowl(1);
    expect(game.frameScore).toEqual(6)
  });

  it('can store each bowls score in the frame array', function(){
    game.bowl(5);
    game.bowl(1);
    expect(game.currentFrame).toEqual([])
    expect(game.allFrames).toEqual([[5,1]])
  });

  it('reduces the bowl count by 1 after each bowl is taken', function(){
    game.bowl(5)
    expect(game.bowlCount).toEqual(1)
  });

  it('holds the games frames', function(){
    game.bowl(1)
    game.bowl(2)
    game.bowl(5)
    game.bowl(4)
    expect(game.allFrames).toEqual([[1,2],[5,4]])
    expect(game.currentFrame).toEqual([])
  });

  it('holds the games frame by frame total scores', function(){
    game.bowl(1)
    game.bowl(2)
    game.bowl(5)
    game.bowl(4)
    expect(game.frameByFrameScore).toEqual([3,9])
  });

  it('counts the frame number', function(){
    game.bowl(1)
    game.bowl(2)
    game.bowl(5)
    game.bowl(4)
    expect(game.frameCount).toEqual(2)
  });

  it('calculates the score total frame scores', function(){
    game.bowl(1)
    game.bowl(2)
    game.bowl(5)
    game.bowl(4)
    game.calculateScore(game.frameByFrameScore)
    expect(game.total).toEqual(12)
  });

  it('calculates the score from the nested fram score arrays', function(){
    game.bowl(1)
    game.bowl(2)
    game.bowl(5)
    game.bowl(4)
    game.calcScore(game.allFrames)
    expect(game.totalScore).toEqual(12)
  });
});
