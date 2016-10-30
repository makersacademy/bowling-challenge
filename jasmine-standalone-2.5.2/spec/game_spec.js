'use strict';

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('starts with a game score of 0', function(){
    expect(game._currentGameScore).toBe(0)
  });

  it('starts on frame 1', function(){
    expect(game._currentFrame).toBe(1)
  });

  it('starts with a frame score of 0', function(){
    expect(game._currentFrameScore).toBe(0)
  });

  it('starts on the first roll each time', function(){
    expect(game._currentBall).toBe(1)
  });

  it('starts with an empty history of frames', function(){
    expect(game._previousFrames).toEqual([])
  });

 describe('Bowling the ball', function(){

  it('adds the score to the current frame score', function(){
    game.bowl(4);
    expect(game._currentFrameScore).toBe(4)
  });

  it('adds the score to the frame history', function(){
    game.bowl(4);
    game.bowl(5);
    expect(game._previousFrames).toEqual([[9, 'none']])
  });

  it('changes current ball to ball 2', function(){
    game.bowl(4);
    expect(game._currentBall).toBe(2)
  });

  it('moves frame on to next frame', function(){
    game.bowl(1);
    expect(game._currentFrameScore).toBe(1);
    game.bowl(5);
    expect(game._currentFrame).toBe(2);
  });

  it('resets the current frame score', function(){
    game.bowl(5);
    expect(game._currentFrameScore).toBe(5);
    game.bowl(5);
    expect(game._currentFrameScore).toBe(0);
  });
 });

 describe('Strike', function(){

   it('adds 10 to the score if you bowl a strike', function(){
     game.bowl(10);
     expect(game._currentGameScore).toBe(10)
   });

   it('changes the frame if you bowl a strike', function(){
     game.bowl(10);
     expect(game._currentFrame).toBe(2)
   });

   it('resets current frame score to 0', function(){
     game.bowl(10);
     expect(game._currentFrameScore).toBe(0)
   });

   it('adds the score to the current frame score', function(){
     game.bowl(4);
     expect(game._currentFrameScore).toBe(4)
   });

   it('adds the score to the frame history', function(){
     game.bowl(10);
     expect(game._previousFrames).toEqual([[10, 'strike']])
   });

  });

  describe('Spare', function(){
   it('adds score to the score card', function(){
   game.bowl(5);
   expect(game._currentFrameScore).toBe(5);
   game.bowl(5);
   expect(game._currentGameScore).toBe(10);
  });

  it('adds the score to the frame history', function(){
    game.bowl(5);
    game.bowl(5);
    expect(game._previousFrames).toEqual([[10, 'spare']])
  });
 });

 describe('Game over', function(){
   it('Ends game when you reach 10 frames', function(){
     game._currentFrame = 10
     game._currentGameScore = 130
     expect(function() { game.bowl(1); }).toThrowError("Game Over!")
   });
 });

 describe('Final score calculation', function(){
   it('gutter game when you miss pins 10 times', function(){
     spyOn(game, 'calculateFinalScore')
     game._currentFrame = 10
     expect(game._gutterGame()).toEqual("Bad luck, Gutter Game!")
   });

   it('returns final score', function(){
     game._currentGameScore = 134
     expect(game.calculateFinalScore()).toEqual(134)
   });
 });
});
