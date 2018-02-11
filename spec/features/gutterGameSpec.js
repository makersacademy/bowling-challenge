/* eslint-env jasmine */

const Frame = require('../../src/frame');
const Game = require('../../src/game');


const GUTTER_GAME = 0;

describe('Gutter game', () => {
  it('returns 0, and shows 20 0 rolls', () => {
    let views = [];
    let scores = [];
    let frame = Frame;
    let game = new Game(frame);

    for (let i = 0; i < 10; i += 1) {
      game.play(GUTTER_GAME);
      game.play(GUTTER_GAME);
      views.push([GUTTER_GAME, GUTTER_GAME]);
      scores.push(GUTTER_GAME + GUTTER_GAME);
    }

    expect(game.score()).toEqual(0);
    expect(game.runningScores()).toEqual(scores);
    expect(game.view()).toEqual(views);
  });
});
