'use strict';

describe ('Game Scorecard', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

    it('throws an error when score is wrong', function() {
      expect(function() { game.addRoll(11); }).toThrow(new Error('Are you trying to cheat?'));
    });

    it('two rolls, no spares, no strike', function() {
      game.addRoll(6);
      expect(game.addScore()).toEqual(6);
    });

});