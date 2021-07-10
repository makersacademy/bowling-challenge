'use strict';

describe('Bowling', () => {
  let bowling;

  beforeEach(() => {
    bowling = new Bowling();
  });

  it('initializes with an empty rolls array', () => {
    expect(bowling.rolls).toEqual([]);
  });

})