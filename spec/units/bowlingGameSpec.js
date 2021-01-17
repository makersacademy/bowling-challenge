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

});