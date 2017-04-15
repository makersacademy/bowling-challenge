'use strict';
describe('Game', function() {
  var game;

  beforeEach( function() {
    game = new Game();
  });

  it('records the player\'s score', function() {
    game.roll(1);
    expect(game.getScore()).toEqual(1);
  });

  it('throws an error if points entered are less than 0', function(){
    expect(function(){game.roll(-1);}).toThrowError("Invalid entry: points must be between 0-10")
  });

  it('throws an error if points entered are greater than 10', function(){
    expect(function(){game.roll(11);}).toThrowError("Invalid entry: points must be between 0-10")
  });

  it('finishes once each player has completed 20 rolls', function() {
    for(var i=0; i<19; i++) {
      game.roll(1);
    }
    expect(function(){game.roll(1);}).toThrowError("The game has finished. Start a new game to throw again.");
  });
});
