'use strict';

describe ('Bowling', () => {
  
  let bowling;

  beforeEach(() => {
    bowling = new Bowling();
  });

  it('can score a gutter game', () => {
    for (let i = 0; i < 20; i++) {
      bowling.roll(0)
    }
    expect(bowling.score()).toEqual(0);
  });

  it('can score 20 for a game of all 1s', () => {
    for (let i = 0; i < 20; i++) {
      bowling.roll(1)
    }
    expect(bowling.score()).toEqual(20)
  });
});
