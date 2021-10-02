'use strict';

describe ('Bowling', () => {
  let bowling;

  beforeEach(() => {
    bowling = new Bowling();
  });

  const rollLoop = (pins, rolls) => {
    for (let i = 0; i < rolls; i++) {
      bowling.roll(pins);
    }
  }

  it('can score a gutter game', () => {
    rollLoop(0, 20);
    expect(bowling.score()).toEqual(0);
  });

  it('can score 80 for a game of all 4s', () => {
    rollLoop(4, 20);
    expect(bowling.score()).toEqual(80);
  });

  it('can score a Spare', () => {
    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(3);
    rollLoop(0, 17);
    expect(bowling.score()).toEqual(16);
  });
});