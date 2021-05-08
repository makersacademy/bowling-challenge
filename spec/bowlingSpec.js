'use strict';

describe ('Bowling', () => {
  let bowling;

  beforeEach( function() {
    bowling = new Bowling();
  });

  it('can score a gutter game', function() {
    for (let i = 0; i < 20; i++) {
      bowling.roll(0);
    }
    expect(bowling.score()).toEqual(0);
  });

  it('can score 20 for a game of all 1s', function() {
    for (let i = 0; i < 20; i++) {
      bowling.roll(1);
    }
    expect(bowling.score()).toEqual(20);
  });
});