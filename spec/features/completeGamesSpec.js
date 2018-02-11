/* eslint-env jasmine */

const Frame = require('../../src/frame');
const Game = require('../../src/game');

const ROLL_ONE = 7;
const ROLL_TWO = 2;
const SPARE_WITH_ROLL_TWO = 8;
const SECOND_TO_LAST_FRAME = 9;
const STRIKE = 10;

describe('Game feature', () => {
  let game;
  let frame;
  let views;
  let scores;

  function chainOfRolls(...rolls) {
    rolls.forEach((roll) => {
      game.play(roll);
    });
  }

  beforeEach(() => {
    views = [];
    scores = [];
    frame = Frame;
    game = new Game(frame);

    for (let i = 0; i < SECOND_TO_LAST_FRAME; i += 1) {
      chainOfRolls(ROLL_ONE, ROLL_TWO);
      views.push([ROLL_ONE, ROLL_TWO]);
      scores.push(ROLL_ONE + ROLL_TWO);
    }
  });

  describe('Full game works', () => {
    it('returns 90 when given ROLL_ONE and ROLL_TWO 10 times', () => {
      chainOfRolls(ROLL_ONE, ROLL_TWO)
      views.push([ROLL_ONE, ROLL_TWO]);
      scores.push(ROLL_ONE + ROLL_TWO);

      expect(game.score()).toEqual(90);
      expect(game.runningScores()).toEqual(scores);
      expect(game.view()).toEqual(views);
    });

    it('returns 94 when give ROLL_ONE, ROLL_TWO 9 times and you finish with a spare and 3', () => {
      chainOfRolls(SPARE_WITH_ROLL_TWO, ROLL_TWO, ROLL_ONE);
      views.push([SPARE_WITH_ROLL_TWO, ROLL_TWO, ROLL_ONE]);
      scores.push(SPARE_WITH_ROLL_TWO + ROLL_TWO + ROLL_ONE)

      expect(game.score()).toEqual(98);
      expect(game.runningScores()).toEqual(scores);
      expect(game.view()).toEqual(views);
    });

    it('returns 111 when given ROLL_ONE, ROLL_TWO 9 times and you finish with a turkey', () => {
      chainOfRolls(STRIKE, STRIKE, STRIKE);
      views.push([STRIKE, STRIKE, STRIKE]);
      scores.push(STRIKE + STRIKE + STRIKE);

      expect(game.score()).toEqual(111);
      expect(game.runningScores()).toEqual(scores);
      expect(game.view()).toEqual(views);
    });

  });
});
