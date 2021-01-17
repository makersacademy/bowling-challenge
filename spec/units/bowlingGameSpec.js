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

  it('will add the the two rolls together correctly if spare and strike are false', function(){
    expect(game.calculateFrameScore(1,2)).toEqual(3);
  });

  it('will add the the two rolls together correctly if spare is true', function(){
    game.spareIdentifier(6,4)
    expect(game.calculateFrameScore(1,2)).toEqual(4);
  });

  it('will add the the two rolls together correctly if strike is true', function(){
    game.strikeIdentifier(10)
    expect(game.calculateFrameScore(1,2)).toEqual(6);
  });

  // remember you might need to change tests once doing gets.chomp and converting from string to integer

  it('will identify a strike correctly', function(){
    game.strikeIdentifier(10)
    expect(game.strike).toEqual(true);
  });

  it('will identify a spare correctly', function(){
    game.spareIdentifier(6,4)
    expect(game.spare).toEqual(true);
  });

  it('plays a frame correctly for a strike', function(){
    game.playAFrame(10,0)
    expect(game.totalScore).toEqual(10);
    expect(game.strike).toEqual(true);
  });

  it('plays a frame correctly for a spare', function(){
    game.playAFrame(5,5)
    expect(game.totalScore).toEqual(10);
    expect(game.strike).toEqual(false);
    expect(game.spare).toEqual(true);
  });

  it('plays a frame correctly', function(){
    game.playAFrame(3,5)
    expect(game.totalScore).toEqual(8);
    expect(game.strike).toEqual(false);
  });
});