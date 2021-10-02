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

  it('can score 1 Strike', () => {
    bowling.roll(10);
    bowling.roll(5);
    bowling.roll(2);
    rollLoop(0, 17);
    expect(bowling.score()).toEqual(24);
  });

  it('can score 2 Strikes in a row', () => {
    bowling.roll(10);
    bowling.roll(10);
    bowling.roll(3);
    bowling.roll(3);
    rollLoop(0, 16);
    expect(bowling.score()).toEqual(45);
  });

  it('can play a perfect game', () => {
    rollLoop(10, 12);
    expect(bowling.score()).toEqual(300);
  });
});