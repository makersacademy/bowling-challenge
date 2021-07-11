'use strict';

describe ('Bowling', () => {
  
  let bowling;

  beforeEach(() => {
    bowling = new Bowling();
  });

  function rollMany(pins, rolls) {
    for (let i = 0; i < rolls; i++) {
      bowling.roll(pins)
    }
  }

  it('can score a gutter game', () => {
    rollMany(0, 20)
    expect(bowling.score()).toEqual(0);
  });

  it('can score 20 for a game of all 1s', () => {
    rollMany(1, 20)
    expect(bowling.score()).toEqual(20)
  });

  it('can score a spare round', () => {
    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(3);
    rollMany(0, 17);
    expect(bowling.score()).toEqual(16);
  });
});
