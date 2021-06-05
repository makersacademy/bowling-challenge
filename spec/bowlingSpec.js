'use strict';

describe('Bowling', () => {
  let bowling;

  beforeEach(() => {
    bowling = new bowling();
  }) 

  it('starts on round 1', () => {
    expect(bowling.round()).toEqual(1)
  })
})