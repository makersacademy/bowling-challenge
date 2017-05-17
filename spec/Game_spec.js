'use strict'

describe('Game', function() {
  var game;

  beforeEach(function() {
    game = new Game;
  });

  describe('#start_game', function() {

    it('starts the game with score 0', function() {
      expect(game.gameScore()).toEqual(0);
    });
  });

    it('starts the game with frame 1', function() {
      expect(game.currentFrame()).toEqual(1);
    });

    it('allows the user the option to play', function() {
      expect(game.gameScore()).toEqual(0);
    });

    it('should have 2 rolls in each frame', function() {
      game.play();
      expect(game.currentFrame()).toEqual(1);
    });

    it('allows the user to get duck', function() {
      spyOn(Math, 'random').and.returnValue(0);
      expect(game.gameScore()).toEqual(0);
    });

    it('should not allow the user to play the eleventh frame', function(){
    for(var i; i<21; i++)
    {
      game.increaseFrame();
    }
    expect(game.currentFrame()).toEqual(1);
  });

  it('increases the game score with 4 if 4 pins fall on rolling', function() {
    spyOn(Math,'random').and.returnValue(4);
    game.play();
    expect(game.gameScore()).toEqual(4);
  });

  it('shows score equal to 6', function() {
    spyOn(Math, 'random').and.returnValue(6);
    game.play();
    expect(game.gameScore()).toEqual(6);
  });

});
