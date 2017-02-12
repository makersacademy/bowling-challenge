'use strict';

describe('Game', function() {

  var game;
  var bowl;
  var bonus;

  beforeEach(function() {
    game = new Game();
    bowl = jasmine.createSpyObj('bowl', ['._currentGo']);
    bonus = jasmine.createSpyObj('bonus', ['._strike', '._spare']);
  });

  it('a player can roll two balls for their turn', function() {
    expect(game.bowl()).not.toBeNull();
  });

      it('player gets a strike', function() {
      game.bowl(10);
      expect(game._strike).toBe(true);
      });

  it('keeps a record of the score', function() {
    expect(game.score()).not.toBeNull();
  });

    it('player gets a spare', function() {
      game.bowl(8);
      game.bowl(2);
      expect(game._spare).toBe(true);
    });

    it('player fails to knock over all pins', function() {
      game.bowl(8);
      game.bowl(1);
      expect(game.open()).not.toEqual(game.PINS);
    });

    it('An error message displays if a player enters a value greater than reamining pins', function() {
      game.bowl(8);
      expect(function(){ game.bowl(8); }).toThrowError('Pin entry exceeded number of remaining pins. please re-enter score');
    });


});
