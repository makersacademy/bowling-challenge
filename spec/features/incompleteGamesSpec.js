/* eslint-env jasmine */

const Frame = require('../../src/frame');
const Game = require('../../src/game');

describe('Game feature', () => {
  let game;
  let frame;

  beforeEach(() => {
    frame = Frame;
    game = new Game(frame);
  });

  function chainOfRolls(...rolls) {
    rolls.forEach((roll) => {
      game.play(roll);
    });
  }

  describe('One game which is incomplete', () => {
    it('returns 9 when given 7, 2', () => {
      chainOfRolls(7, 2);

      expect(game.score()).toEqual(9);
      expect(game.runningScores()).toEqual([9, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
      expect(game.view()).toEqual([[7, 2], [], [], [], [], [], [], [], [], []]);
    });

    it('returns 14 after 1.5 frames with no strikes or spares', () => {
      chainOfRolls(7, 2, 6);

      expect(game.score()).toEqual(15);
      expect(game.runningScores()).toEqual([9, 6, 0, 0, 0, 0, 0, 0, 0, 0]);
      expect(game.view()).toEqual([[7, 2], [6], [], [], [], [], [], [], [], []]);
    });

    it('returns 19 after 6 frames with two gutter balls ', () => {
      chainOfRolls(3, 5, 1, 2, 1, 0, 3, 4, 0, 8, 1, 1);

      expect(game.score()).toEqual(29);
      expect(game.runningScores()).toEqual([8, 3, 1, 7, 8, 2, 0, 0, 0, 0]);
      expect(game.view()).toEqual([[3, 5], [1, 2], [1, 0], [3, 4], [0, 8], [1, 1], [], [], [], []]);
    });

    it('returns 47 after 7 frames with a strike at the start', () => {
      chainOfRolls(10, 3, 5, 1, 2, 1, 0, 3, 4, 0, 8, 1, 1);

      expect(game.score()).toEqual(47);
      expect(game.runningScores()).toEqual([18, 8, 3, 1, 7, 8, 2, 0, 0, 0]);
      expect(game.view()).toEqual([[10], [3, 5], [1, 2], [1, 0], [3, 4], [0, 8], [1, 1], [], [], []]);
    });

    it('returns 42 after 7 frames with a spare at the start', () => {
      chainOfRolls(7, 3, 3, 5, 1, 2, 1, 0, 3, 4, 0, 8, 1, 1);

      expect(game.score()).toEqual(42);
      expect(game.runningScores()).toEqual([13, 8, 3, 1, 7, 8, 2, 0, 0, 0]);
      expect(game.view()).toEqual([[7, 3], [3, 5], [1, 2], [1, 0], [3, 4], [0, 8], [1, 1], [], [], []]);
    });
  });
});
