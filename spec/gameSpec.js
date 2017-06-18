'use strict';

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('instantiates with at an array of Frame objects', function(){
    expect(game.frameArray).toBeDefined();
  });

  it('has ten frames in frameArray', function(){
    expect(game.frameArray.length).toEqual(10)
  });

  it('has an an empty array for scores', function(){
    expect(game.scores).toEqual([])
  });

  xit('adds scores from a frame to an array', function(){
    game.frameArray[0].addFirstScore(5);
    game.frameArray[0].addSecondScore(2);
    game.logFrameScore(0)
    expect(game.scores).toEqual([[5,2]])
  });

  it('has a running total for the game', function(){
    expect(game.runningTotal).toBeDefined();
  });
})
