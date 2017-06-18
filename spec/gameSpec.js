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

  xit('adds scores from a frame to an array', function(){
    game.frameArray[0].addFirstScore(5);
    game.frameArray[0].addSecondScore(2);
    game.logFrameScore(0)
    expect(game.scores).toEqual([[5,2]])
  });

  it('has a running total for the game', function(){
    expect(game.runningTotal).toBeDefined();
  });

  it('can add a frame total to the running total', function(){
    game.frameArray[0].addFirstScore(5);
    game.frameArray[0].addSecondScore(2);
    game.logFrameScore(0)
    expect(game.runningTotal).toEqual(7);
  })
})
