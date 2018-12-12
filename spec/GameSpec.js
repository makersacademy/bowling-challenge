'use strict';

describe('Game', function() {

  var game;

  beforeEach(function(){
    game = new Game;
  });

  it('should start at frame 1', function(){
    expect(game.currentFrame).toEqual(0);
  });

  it('should start with a total score of 0', function(){
    expect(game.totalScore).toEqual(0);
  });

  it('should initialise with a list of 10 frames', function(){
    expect(game.frames.length).toEqual(10);
  });

  it('should move to the next frame if finished current frame', function(){
    game.frames[game.currentFrame].bowl(10);
    game.nextFrame();
    expect(game.currentFrame).toEqual(1);
  });

  it('should throw error if next frame called in unfinished frame', function(){
    expect(function(){ game.nextFrame(); }).toThrow(new Error('Too early!'));
  });

  it('should keep a running total of the score', function(){
    game.frames[game.currentFrame].bowl(2);
    game.frames[game.currentFrame].bowl(3);
    game.nextFrame();
    game.frames[game.currentFrame].bowl(4);
    game.frames[game.currentFrame].bowl(5);
    game.nextFrame();
    expect(game.totalScore).toEqual(14);
  });

  it('should add a bonus after a spare', function(){
    game.frames[game.currentFrame].bowl(5);
    game.frames[game.currentFrame].bowl(5);
    game.nextFrame();
    game.frames[game.currentFrame].bowl(10);
    game.nextFrame();
    expect(game.totalScore).toEqual(30);
  });

  it('should add a bonus after a strike', function(){
    game.frames[game.currentFrame].bowl(10);
    game.nextFrame();
    game.frames[game.currentFrame].bowl(4);
    game.frames[game.currentFrame].bowl(4);
    game.nextFrame();
    expect(game.totalScore).toEqual(26);
  });

  it('should have a final frame with its own rules', function(){
    expect(game.frames[9]).toEqual(new FinalFrame);
  });

describe('FinalFrame', function(){

  var finalFrame;

  beforeEach(function(){
    finalFrame = new FinalFrame;
  });

  it('should add a third roll after 2 strikes', function(){
    finalFrame.bowl(10);
    finalFrame.bowl(10);
    finalFrame.bowl(9);
    expect(finalFrame.thirdBowl).toEqual(9);
  });

});


});

describe('Frame', function(){

  var frame;

  beforeEach(function(){
    frame = new Frame;
  });

  it('should start with 10 pins up', function(){
    expect(frame.pinsUp).toEqual(10);
  });

  it('should accept a bowl to reduce pinsUp', function(){
    frame.bowl(8);
    expect(frame.pinsUp).toEqual(2);
  });

  it('should throw an error if passing too many pins', function(){
    expect(function(){ frame.bowl(11); }).toThrow(new Error('Too many pins!'));
  });

  it('should accept a maximum of 2 bowls', function(){
    frame.bowl(2);
    frame.bowl(3);
    expect(function(){ frame.bowl(4); }).toThrow(new Error('Too many bowls!'));
  });

  it('should total the score for a frame', function(){
    frame.bowl(2);
    frame.bowl(3);
    expect(frame.score).toEqual(5);
  });

  it('should know when the frame is finished', function(){
    expect(frame.isOver()).toEqual(false);
    frame.bowl(2);
    frame.bowl(3);
    expect(frame.isOver()).toEqual(true);
    frame = new Frame;
    expect(frame.isOver()).toEqual(false);
    frame.bowl(10);
    expect(frame.isOver()).toEqual(true);
  });

  it('should record strikes', function(){
    frame.bowl(10);
    expect(frame.isStrike()).toEqual(true);
  });

  it('should record spares', function(){
    frame.bowl(5);
    frame.bowl(5);
    expect(frame.isSpare()).toEqual(true);
  });

});
