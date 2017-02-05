'use strict';

describe('Game', function() {

  var game;
  var bowl;

  beforeEach(function() {
    game = new Game();
    bowl = jasmine.createSpyObj('bowl', ['_currentGo']);
  });

  it('a player can roll two balls for their turn', function() {
    expect(game.bowl()).not.toBeNull();
  });

  it('player makes a strike', function() {
  game.strikeX();
  expect(game._currentGo).toEqual([10,0]);
  });


  it('keeps a record of the score', function() {
    expect(game.playerScore()).not.toBeNull();
  });

});
