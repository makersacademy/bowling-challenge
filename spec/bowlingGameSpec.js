describe('BowlingGame', function () {
  var BowlingGame = require("../src/bowlingGame.js");

  beforeEach(function () {
    game = new BowlingGame;
  });

  function rollMultiple(rolls, pins) {
    for (let i = 1; i <= rolls; i++) {
      game.addRoll(pins);
    }
  };

  it('can add a roll to the scores array', function () {
    game.addRoll(4);
    game.addRoll(2);
    expect(game.rollScores()).toEqual([4, 2]);
  });

  it('can add rolls in a frame', function () {
    game.addRoll(4);
    game.addRoll(2);
    expect(game.addRollsInFrame(0)).toEqual(6);
  });

  it('Gutter Game', function () {
    rollMultiple(20, 0);
    expect(game.scoreGame()).toEqual(0);
    expect(game.isGameOver()).toBe(true);
  });

  describe ('strikes', function () {

    it('allows for 1 strike', function () {
      game.addRoll(10);
      rollMultiple(18, 1);
      expect(game.scoreGame()).toEqual(30);
      expect(game.isGameOver()).toBe(true);
    });

    it('allows for multiple strikes', function () {
      rollMultiple(2, 10);
      rollMultiple(16, 1);
      expect(game.scoreGame()).toEqual(49);
      expect(game.isGameOver()).toBe(true);
    });

    it('allows for a perfect game', function () {
      rollMultiple(12, 10);
      expect(game.scoreGame()).toEqual(300);
      expect(game.isGameOver()).toBe(true);
    });
  });

  describe('spares', function () {

    it('can correctly calculate spares', function () {
      rollMultiple(2, 5);
      expect(game.isSpare(0)).toBe(true);
    });

    it('can correctly calculate spare bonus points', function () {
      rollMultiple(2, 5);
      rollMultiple(2, 2);
      expect(game.spareBonusPoints(0)).toEqual(2);
    });

    it('can handle scoring with one spare', function () {
      rollMultiple(2, 5);
      rollMultiple(18, 2);
      expect(game.scoreGame()).toEqual(48);
      expect(game.isGameOver()).toBe(true);
    });

    it('can handle scoring with two spares', function () {
      rollMultiple(4, 5);
      rollMultiple(16, 2);
      expect(game.scoreGame()).toEqual(59);
      expect(game.isGameOver()).toBe(true);
    });
  });
});
