'use strict';

describe('Game', function() {

  var game;

  beforeEach(function(){
    game = new Game;
  });

  it('should start at frame 1', function(){
    expect(game.currentFrame).toEqual(1);
  });

  it('should start with a total score of 0', function(){
    expect(game.totalScore).toEqual(0);
  });

  it('should accept an empty list of frames', function(){
    expect(game.frames).toEqual([]);
  });

  it('should be able to start a new frame', function(){
    game.start(Frame);
    expect(game.frames[1].pinsUp).toEqual(10);
  });

  // it('should update previous frame score on a spare', function(){
  //   game.start(Frame);
  //   game.frames[1].bowl(5);
  //   game.frames[1].bowl(5);
  //   game.start(Frame);
  //   game.frames[2].bowl(10);
  //   expect(game.frames[1].score).toEqual(20);
  // });

  it('should begin a new frame', function(){
    game.newFrame();
    expect(game.frames[1].pinsUp).toEqual(10);
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
