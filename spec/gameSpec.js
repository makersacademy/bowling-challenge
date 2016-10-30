'use strict';

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('has an initial score of 0 and no frames', function(){
    expect(game.frameScore).toEqual(0)
    expect(game.frameCount).toEqual(0)
  });

  it('reduces the bowl count by 1 after each bowl is taken', function(){
    game.bowl(5)
    expect(game.bowlCount).toEqual(1)
  });

  describe('After a turn (2 bowls) has been taken', function(){
    beforeEach(function(){
      game.bowl(5)
      game.bowl(1)
    });
    it('can add a bowl score to the current frame', function(){
      expect(game.frameScore).toEqual(6)
    });
    it('can store each bowls score in the frame array', function(){
      expect(game.currentFrame).toEqual([])
      expect(game.allFrames).toEqual([[5,1]])
    });
  });

  describe('After multiple bowls have been taken', function(){
    beforeEach(function(){
      game.bowl(1)
      game.bowl(2)
      game.bowl(5)
      game.bowl(4)
    });
    it('holds the games frames', function(){
      expect(game.allFrames).toEqual([[1,2],[5,4]])
      expect(game.currentFrame).toEqual([])
    });
    it('counts the frame number', function(){
      expect(game.frameCount).toEqual(2)
    });
    it('holds the games frame by frame total scores', function(){
      expect(game.frameByFrameScore).toEqual([3,9])
    });
    it('calculates the score total frame scores', function(){
      game.calculateScore(game.frameByFrameScore)
      expect(game.total).toEqual(12)
    });
    it('calculates the score from the nested individual frame score arrays', function(){
      game.calcScore(game.allFrames)
      expect(game.totalScore).toEqual(12)
    });
  });

  it('Ends the frame if player gets a strike', function(){
    game.bowl(10)
    expect(game.frameScore).toEqual(10)
    expect(game.strike).toBe(true)
  });
});
