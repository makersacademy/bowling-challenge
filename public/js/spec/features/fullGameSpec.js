'use strict';

describe('Feature testing a full game', () => {
  let game;

  beforeEach(() => { game = new Game(); });

  it('runs a correct gutter game', () => {
    for (let i = 0; i < 20; i++) { game.addRoll(0); }

    expect(game.frames.length).toBe(10);
    expect(game.totalScore()).toBe(0);
    expect(game.scoreBoard()).toEqual([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  });

  it('runs a correct game when every roll is 5', () => {
    for (let i = 0; i < 21; i++) { game.addRoll(5); }

    expect(game.frames.length).toBe(10);
    expect(game.totalScore()).toBe(150);
    expect(game.scoreBoard()).toEqual([15, 30, 45, 60, 75, 90, 105, 120, 135, 150]);
  });

  it('runs a correct game when each frame is 9-0', () => {
    for (let i = 0; i < 10; i++) {
      [9, 0].forEach((roll) => game.addRoll(roll));
    }
    expect(game.frames.length).toBe(10);
    expect(game.totalScore()).toBe(90);
    expect(game.scoreBoard()).toEqual([9, 18, 27, 36, 45, 54, 63, 72, 81, 90]);
  })

  it('runs a correct perfect game', () => {
    for (let i = 0; i < 12; i++) { game.addRoll(10); }

    expect(game.frames.length).toBe(10);
    expect(game.totalScore()).toBe(300);
    expect(game.scoreBoard()).toEqual([30, 60, 90, 120, 150, 180, 210, 240, 270, 300]);
  });

  it('runs a correct game for example game 1', () => {
    const exampleGame1 = [1, 4, 4, 5, 6, 4, 5, 5, 10, 0, 1, 7, 3, 6, 4, 10, 2, 8, 6];
    exampleGame1.forEach((roll) => game.addRoll(roll));

    expect(game.frames.length).toBe(10);
    expect(game.totalScore()).toBe(133);
    expect(game.scoreBoard()).toEqual([5, 14, 29, 49, 60, 61, 77, 97, 117, 133]);
  })

  it('runs a correct game for example game 2', () => {
    const exampleGame2 = [9, 1, 0, 10, 10, 10, 6, 2, 7, 3, 8, 2, 10, 9, 0, 10, 10, 8];
    exampleGame2.forEach((roll) => game.addRoll(roll));

    expect(game.frames.length).toBe(10);
    expect(game.totalScore()).toBe(176);
    expect(game.scoreBoard()).toEqual([10, 30, 56, 74, 82, 100, 120, 139, 148, 176]);
  })
});
