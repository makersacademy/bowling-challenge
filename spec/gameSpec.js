'use strict';

describe('Game', function(){
  var game;
  var frame;
  beforeEach(function(){
    game = new Game();
    frame = new Frame();
    spyOn(Math, 'random').and.returnValue(0.3);
  });

  it('expects the game to have 10 frames', function(){
    expect(game.frames.length).toEqual(10);
  });

  it('lets a player start the game', function(){
    var completedGame = game.startGame();
    expect(completedGame[completedGame.length -1].frameScore()).toEqual(5);
  });

  it('a player can play a frame', function(){
    game.playFrame(5);
    expect(game.frames[0]).toEqual(frame);
    expect(game.frames[5].frameScore()).toEqual(5);
  });

  it('gives total score for game', function(){
    game.startGame();
    expect(game.totalGameScore()).toEqual(50)
  });

  it('does not allow second bowl if strike', function(){
    spyOn(Frame.prototype, 'secondBowl')
    spyOn(Frame.prototype, 'pinsDown').and.returnValue(10)
    game.playFrame(5);
    expect(Frame.prototype.secondBowl).not.toHaveBeenCalled()
  });

  it('returns the spare score as 10 plus 1st bowl next frame', function(){
    spyOn(Frame.prototype, 'pinsDown').and.returnValue(5)
    game.startGame();
    expect(game.totalGameScore()).toEqual(145);
  });

  it('returns strike score plus next two bowls score(non-strike bowls)', function(){
    spyOn(Frame.prototype, 'pinsDown').and.returnValues(10,5,2,10,5,2,10,5,2,10,5,2,10,5,2);
    game.startGame();
    expect(game.totalGameScore()).toEqual(120);
  });

  it('returns strike score plus next two bowls score(strike bowls)', function(){
    spyOn(Frame.prototype, 'pinsDown').and.returnValues(10,10,10,10,10,10,10,10,10,10);
    game.startGame();
    expect(game.totalGameScore()).toEqual(270);
  });

});
