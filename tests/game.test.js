const Game = require('../lib/game');

describe('Game', () => {
  it('creates a game instance where current score is 0', () => {
    const game = new Game();
    expect(game.getTotal()).toBe(0);
  });
  it('can add a single frame and return the total score', () => {
    const game = new Game();
    game.addFrame({ getTotal: () => 5 });
    expect(game.getTotal()).toBe(5);
  });
  it('can add framess and return the total score', () => {
    const game = new Game();
    game.addFrame({ getTotal: () => 5 });
    game.addFrame({ getTotal: () => 9 });
    game.addFrame({ getTotal: () => 0 });
    expect(game.getTotal()).toBe(14);
  });
  it('can return the total score of a gutterball game', () => {
    const game = new Game();
    for (let i = 0; i < 10; i += 1) {
      game.addFrame({ getTotal: () => 0 });
    }
    expect(game.getTotal()).toBe(0);
  });
  it('can add all 10 frames and return the total score without bonuses', () => {
    const game = new Game();
    for (let i = 0; i < 10; i += 1) {
      game.addFrame({ getTotal: () => 5 });
    }
    expect(game.getTotal()).toBe(50);
  });
  it('can calculate the score with spares bonus added', () => {
    const game = new Game();
    game.addFrame({ getTotal: () => 10, isSpare: () => true });
    game.addFrame({
      getFirst: () => 3,
      getTotal: () => 6,
      isSpare: () => false,
    });
    // get first roll after a spare
    expect(game.sparesBonus()).toBe(3);
  });
  it('can calculate the score with spares bonus added with multiple spares', () => {
    const game = new Game();
    game.addFrame({ getTotal: () => 10, isSpare: () => true });
    game.addFrame({
      getFirst: () => 7,
      getTotal: () => 10,
      isSpare: () => true,
    });
    game.addFrame({
      getFirst: () => 3,
      getTotal: () => 6,
      isSpare: () => false,
    });
    // get first roll after a spare
    expect(game.sparesBonus()).toBe(10);
  });
  it('can calculate the score with strike bonus added', () => {
    const game = new Game();
    game.addFrame({ getTotal: () => 10, isStrike: () => true });
    game.addFrame({
      getFirst: () => 3,
      getSecond: () => 3,
      getTotal: () => 6,
      isSpare: () => false,
      isStrike: () => false,
    });
    // get two rolls after a strike
    expect(game.strikesBonus()).toBe(6);
  });
  it('can calculate the score with strike bonus added with multiple strikes', () => {
    const game = new Game();
    game.addFrame({ getTotal: () => 10, isStrike: () => true });
    game.addFrame({
      getFirst: () => 10,
      getSecond: () => 0,
      isStrike: () => true,
    });
    game.addFrame({
      getFirst: () => 6,
      getSecond: () => 0,
      isStrike: () => false,
    });
    // 16 + 6 = 22
    expect(game.strikesBonus()).toBe(22);
  });
  it('can calculate the total bonus scores', () => {
    const game = new Game();
    game.addFrame({
      getFirst: () => 6,
      getSecond: () => 4,
      getTotal: () => 10,
      isStrike: () => false,
      isSpare: () => true,
    });
    // bonus = 0
    game.addFrame({
      getFirst: () => 2,
      getSecond: () => 3,
      getTotal: () => 10,
      isStrike: () => false,
      isSpare: () => false,
    });
    // bonus = 2
    game.addFrame({
      getFirst: () => 10,
      getSecond: () => 0,
      getTotal: () => 10,
      isStrike: () => true,
      isSpare: () => false,
    });
    // bonus = 0
    game.addFrame({
      getFirst: () => 7,
      getSecond: () => 2,
      getTotal: () => 9,
      isStrike: () => false,
      isSpare: () => false,
    });
    // bonus = 9
    expect(game.getBonus()).toBe(11);
  });
  it('can return the grand total - no extra rolls', () => {
    const game = new Game();
    for (let i = 0; i < 9; i += 1) {
      game.addFrame({
        getFirst: () => 5,
        getSecond: () => 2,
        getTotal: () => 7,
        isStrike: () => false,
        isSpare: () => false,
      });
    }
    // score of 63 from first 9 bowls
    // final frame score of 7
    game.addFrame({
      getFirst: () => 5,
      getSecond: () => 2,
      getThird: () => 0,
      getTotal: () => 7,
      isStrike: () => false,
      isSpare: () => false,
    });
    expect(game.getGrandTotal()).toBe(70);
  });
  it('can return the grand total - one extra roll', () => {
    const game = new Game();
    for (let i = 0; i < 9; i += 1) {
      game.addFrame({
        getFirst: () => 5,
        getSecond: () => 2,
        getTotal: () => 7,
        isStrike: () => false,
        isSpare: () => false,
      });
    }
    // score of 63 from first 9 bowls
    // final frame score of 18
    game.addFrame({
      getFirst: () => 5,
      getSecond: () => 5,
      getThird: () => 8,
      getTotal: () => 18,
      isStrike: () => false,
      isSpare: () => true,
    });
    expect(game.getGrandTotal()).toBe(81);
  });
  it('can return the grand total - two extra rolls', () => {
    const game = new Game();
    for (let i = 0; i < 9; i += 1) {
      game.addFrame({
        getFirst: () => 5,
        getSecond: () => 2,
        getTotal: () => 7,
        isStrike: () => false,
        isSpare: () => false,
      });
    }
    // score of 63 from first 9 bowls
    // final frame score of 24
    game.addFrame({
      getFirst: () => 10,
      getSecond: () => 10,
      getThird: () => 4,
      getTotal: () => 24,
      isStrike: () => true,
      isSpare: () => false,
    });
    expect(game.getGrandTotal()).toBe(87);
  });
  it('returns 300 for a perfect game of 12 strikes', () => {
    const game = new Game();
    for (let i = 0; i < 9; i += 1) {
      game.addFrame({
        getFirst: () => 10,
        getSecond: () => 0,
        getTotal: () => 10,
        isStrike: () => true,
        isSpare: () => false,
      });
    }
    game.addFrame({
      getFirst: () => 10,
      getSecond: () => 10,
      getThird: () => 10,
      getTotal: () => 30,
      isStrike: () => true,
      isSpare: () => false,
    });
    expect(game.getTotal()).toBe(120);
    expect(game.strikesBonus()).toBe(180);
    expect(game.getGrandTotal()).toBe(300);
  });
});