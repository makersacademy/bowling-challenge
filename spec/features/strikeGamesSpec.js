/* eslint-env jasmine */

const Frame = require('../../src/frame');
const Game = require('../../src/game');

describe('Full game works', () => {

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

  it('returns 100 when get a  strike, then 7, 2', () => {
    let views = [[10]];
    let scores = [19];
    game.play(10);
    for (let i = 0; i < 9; i += 1) {
      game.play(7);
      game.play(2);
      views.push([7, 2]);
      scores.push(7 + 2); }

    expect(game.runningScores()).toEqual(scores);
    expect(game.score()).toEqual(100);
    expect(game.view()).toEqual(views);
  });

  it('returns 300 when you play a perfect game', () => {
    for (let i = 0; i < 12; i += 1) { game.play(10); }

    expect(game.score()).toEqual(300);
    expect(game.runningScores()).toEqual([30, 30, 30, 30, 30, 30, 30, 30, 30, 30]);
    expect(game.view()).toEqual([[10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 10, 10]]);
  });

  it('returns 270 when you play a perfect game, but gutter the last two', () => {
    for (let i = 0; i < 10; i += 1) { game.play(10); }
    game.play(0);
    game.play(0);


    expect(game.score()).toEqual(270);
    expect(game.runningScores()).toEqual([30, 30, 30, 30, 30, 30, 30, 30, 20, 10]);
    expect(game.view()).toEqual([[10], [10], [10], [10], [10], [10], [10], [10], [10], [10, 0, 0]]);
  });


      it('returns 100 when get a  strike, then 7, 2', () => {
        let views = [[10]];
        let scores = [19];
        game.play(10);
        for (let i = 0; i < 9; i += 1) {
          game.play(7);
          game.play(2);
          views.push([7, 2]);
          scores.push(7 + 2); }

        expect(game.runningScores()).toEqual(scores);
        expect(game.score()).toEqual(100);
        expect(game.view()).toEqual(views);
      });

});
