'use strict';

describe('Game',function(){
  var game;

  beforeEach(function(){
    game = new Game(); 
  });

  it ('keeps track of all rolls', function(){
    expect(game.frames).toEqual([]);
  });

  it ('accepts frames a parameter on addFrame', function(){
    game.addFrame([1,2]);
    expect(game.frames).toEqual([[1,2]]);
  });

  it ('accepts a maximum of 10 frames', function(){
    game.addFrame([1,2]);
    game.addFrame([1,2]);
    game.addFrame([1,2]);
    game.addFrame([1,2]);
    game.addFrame([1,2]);
    game.addFrame([1,2]);
    game.addFrame([1,2]);
    game.addFrame([1,2]);
    game.addFrame([1,2]);
    game.addFrame([1,2]);
    game.addFrame([1,2]);
    expect(game.frames.length).toEqual(10);
  });

  it ('calculates a final score', function() {
    game.addFrame([1,2]);
    game.addFrame([3,4]);
    expect(game.finalScore()).toEqual(10);
  });

});