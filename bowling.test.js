const Bowling = require('./bowling');

describe('Bowling', () => {
  it('initalizes a new game', () => {
    const bowling = new Bowling();
    expect(bowling.game()).toEqual(0);
  });

  it('adds a score', () => {
    const bowling = new Bowling();
    bowling.addScore(4);
    expect(bowling.game()).toEqual(4);
   });

  it('recognises a strike', () => {
    const bowling = new Bowling();
    bowling.addScore(10);
    expect(bowling.game()).toBe(10);
  });

  it('recognises a gutter game', () => {
    const bowling = new Bowling();
    for (let i = 0; i > 10; i++) { bowling.addScore(0); }
    expect(bowling.game()).toEqual(0);
  });
});