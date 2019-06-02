'use strict';

describe ('Game Scorecard', function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

    it('throws an error when score is wrong', function() {
      expect(function() { game.roll(11); }).toThrow(new Error('Are you trying to cheat?'));
    });

    it('holds the score from one single roll', function() {
      game.roll(6);
      expect(game.addScore()).toEqual(6);
    });

    it('when a frame has two rolls, next frame will start', function() {
      game.roll(6);
      game.roll(4);
      expect(game.frame()).toBe(2);
    });

});