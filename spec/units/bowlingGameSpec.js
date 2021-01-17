'use strict'; 

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  it('initializes with a total score of 0', function(){
      expect(game.totalScore).toEqual(0);
  });

  it('initializes with current frame equal to 1', function(){
    expect(game.currentFrame).toEqual(1);
  });

  it('initializes with a false spare and strike', function(){
    expect(game.spare).toEqual(false);
    expect(game.strike).toEqual(false);
  });

  it('will add the the two rolls together if spare and strike are false', function(){
    expect(game.calculateFrameScore(1,2)).toEqual(3);
  });

  // add in additional tests for calculate score for strike and spare once the functions are written in
  
});