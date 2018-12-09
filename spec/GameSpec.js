'use strict';

describe('Game', function() {

  var game;

  beforeEach(function(){
    game = new Game;
  });

  it('should start at frame 1', function(){
    expect(game.currentFrame).toEqual(1);
  });

  it('should start with a score of 0', function(){
    expect(game.totalScore).toEqual(0);
  });

  it('should accept an empty list of frames', function(){
    expect(game.frames).toEqual([]);
  });

});

describe('Frame', function(){

  var game;
  var frame;

  beforeEach(function(){
    game = new Game;
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

});
