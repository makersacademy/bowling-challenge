const Bowling = require('./bowling.js');

describe('bowling', () => {
    test('it can return a gutter game', () => {
      const bowling = new Bowling();
      for (let i = 0; i < 20; i++) {
        bowling.roll(0);
      }
      expect(bowling.score).toEqual(0);
    });

    test('can roll all 1s', () => {
      const bowling = new Bowling();
      for (let i = 0; i < 20; i++) {
        bowling.roll(1);
      }
      expect(bowling.score).toEqual(20);
    });
});
