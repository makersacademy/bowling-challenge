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
    });

    it('returns 47 after 7 frames with a strike at the start', () => {
      chainOfRolls(10, 3, 5, 1, 2, 1, 0, 3, 4, 0, 8, 1, 1);

      expect(game.score()).toEqual(47);
    });

    it('returns 42 after 7 frames with a spare at the start', () => {
      chainOfRolls(7, 3, 3, 5, 1, 2, 1, 0, 3, 4, 0, 8, 1, 1);

      expect(game.score()).toEqual(42);
      expect(game.runningScores()).toEqual([13, 8, 3, 1, 7, 8, 2, 0, 0, 0]);
    });
  });

  describe('Full game works', () => {
    it('returns 90 when give 7, 2 10 times', () => {
      for (let i = 0; i < 10; i += 1) { game.play(7); game.play(2); }

      expect(game.score()).toEqual(90);
    });

    it('returns 94 when give 7, 2 9 times and you finish with a  spare and 3', () => {
      for (let i = 0; i < 9; i += 1) { game.play(7); game.play(2); }
      chainOfRolls(8, 2, 3);

      expect(game.score()).toEqual(94);
      expect(game.runningScores()).toEqual([9, 9, 9, 9, 9, 9, 9, 9, 9, 13]);
    });

    it('returns 121 when give 7, 2 9 times and you finish with a turkey', () => {
      for (let i = 0; i < 9; i += 1) { game.play(7); game.play(2); }
      chainOfRolls(10, 10, 10);

      expect(game.score()).toEqual(111);
      expect(game.runningScores()).toEqual([9, 9, 9, 9, 9, 9, 9, 9, 9, 30]);
    });

    it('returns 100 when get a  strike, then 7, 2', () => {
      game.play(10);
      for (let i = 0; i < 9; i += 1) { game.play(7); game.play(2); }

      expect(game.score()).toEqual(100);
    });

    it('returns 300 when you play a perfect game', () => {
      for (let i = 0; i < 12; i += 1) { game.play(10); }

      expect(game.score()).toEqual(300);
      expect(game.runningScores()).toEqual([30, 30, 30, 30, 30, 30, 30, 30, 30, 30]);
    });

    it('returns 270 when you play a perfect game, but gutter the last two', () => {
      for (let i = 0; i < 10; i += 1) { game.play(10); }
      game.play(0);
      game.play(0);


      expect(game.score()).toEqual(270);
      expect(game.runningScores()).toEqual([30, 30, 30, 30, 30, 30, 30, 30, 20, 10]);
    });
  });



  describe('partially complete games', () => {

    it('returns [7,2] [6] after 1.5 frames with no strikes or spares', () => {
      chainOfRolls(7, 2, 6);


    });

    it('returns arrays with  3, 5, 1, 2, 1, 0, 3, 4, 0, 8, 1, 1 after 6 frames with two gutter balls ', () => {
      chainOfRolls(3, 5, 1, 2, 1, 0, 3, 4, 0, 8, 1, 1);

      expect(game.view()).toEqual([[3, 5], [1, 2], [1, 0], [3, 4], [0, 8], [1, 1], [], [], [], []]);
    });

    it('returns  the first frame with just a 10 after 7 frames with a strike at the start', () => {
      chainOfRolls(10, 3, 5, 1, 2, 1, 0, 3, 4, 0, 8, 1, 1);

        expect(game.view()).toEqual([[10], [3, 5], [1, 2], [1, 0], [3, 4], [0, 8], [1, 1], [], [], []]);
    });

    it('returns the same frames after 7 frames with and a spare at the start', () => {
      chainOfRolls(7, 3, 3, 5, 1, 2, 1, 0, 3, 4, 0, 8, 1, 1);

      expect(game.view()).toEqual([[7, 3], [3, 5], [1, 2], [1, 0], [3, 4], [0, 8], [1, 1], [], [], []]);
    });
  });

  describe('Full game view', () => {
    it('returns 10 arrays with 7 and 2 and finally one with three rolls when you finish with a spare and 3', () => {
      const views = [];
      for (let i = 0; i < 9; i += 1) { game.play(7); game.play(2); views.push([7, 2]); }
      chainOfRolls(8, 2, 3);
      views.push([8, 2, 3]);

      expect(game.runningScores()).toEqual([9, 9, 9, 9, 9, 9, 9, 9, 9, 13]);
    });

    it('returns the same 9 games and then an array with three tens when give 7, 2 9 times and you finish with a turkey', () => {
      const views = [];
      for (let i = 0; i < 9; i += 1) { game.play(7); game.play(2); views.push([7, 2]); }
      chainOfRolls(10, 10, 10);
      views.push([10, 10, 10]);

      expect(game.view()).toEqual(views);
    });

    it('returns 9 arrays with 10 and then one array with three 10s when you play a perfect game', () => {
      for (let i = 0; i < 12; i += 1) { game.play(10); }

      expect(game.view()).toEqual([[10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10, 10]]);
    });

    it('returns 9 arrays with 10, but then one with 10 and 0 twice when you play a perfect game, but gutter the last two', () => {
      for (let i = 0; i < 10; i += 1) { game.play(10); }
      game.play(0);
      game.play(0);

      expect(game.view()).toEqual([[10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 0, 0]]);
    });
  });
});
