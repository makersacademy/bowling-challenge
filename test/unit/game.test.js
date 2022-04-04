const Game = require('../../lib/game');

describe('Game class', () => {
  
  test('calculateScore method should return the current score', () => {
    const bowling = new Game;
    bowling.roll(4);
    bowling.roll(5);
    expect(bowling.calculateScore()).toBe(9);
  });
  
  test('checkFrame should increase current frame if the frame current frame has 2 rolls', () => {
    const bowling = new Game;
    bowling.roll(4);
    bowling.roll(5);
    expect(bowling.currentFrame).toBe(0);
    bowling.checkFrame();
    expect(bowling.currentFrame).toBe(1);
  });
});
