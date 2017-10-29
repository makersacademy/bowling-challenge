'use strict';

describe('Game', function() {

  var game;

  beforeEach(function() {
    game = new Game();

  });

  it('should have a player', function() {
    expect(game._player).toEqual('Ollie');
  });

  it('gets the total score', function() {
    expect(game.getTotalScore()).toEqual(0);
  });


  it('gets the score sheet', function() {
    expect(game.getScoreSheet()).toEqual([]);
  });


  it('should know the current frame and roll', function() {
    expect(game._frameAndRoll).toEqual([1,1]);
  });

  it('has a roll method that returns first roll', function() {
    expect(game.roll(5)).toBeDefined();
    // expect(game.roll(5)).andReturn(game.firstRoll());
  });

});
