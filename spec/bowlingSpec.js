'use strict';

describe('Bowling', () => {
  let bowling;

  beforeEach(() => {
    bowling = new Bowling();
  });

  it('initializes with an empty rolls array', () => {
    expect(bowling.rolls).toEqual([]);
  });

  it('pushes first and second roll into the rolls array', () => {
      bowling.frame(2, 3)
      expect(bowling.rolls[0]).toEqual({ first: 2, second: 3 })
  });

  it('records a strike', () => {
    bowling.frame(10)
    expect(bowling.rolls[0]).toEqual({ first: 10 })
  });

  it('pushes only two rolls if there is no strike or spare in tenth frame', () => {
    bowling.tenthFrame(2, 3)
    expect(bowling.rolls[0]).toEqual({ first: 2, second: 3 })
  });

  it('pushes three rolls with a strike or spare in the tenth', () => {
    bowling.tenthFrame(6, 4, 10)
    expect(bowling.rolls[0]).toEqual({ first: 6, second: 4, third: 10 })
  });
});
