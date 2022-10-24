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

  it('can score a strike', () => {
    bowling.roll(10);
    bowling.roll(5);
    bowling.roll(2);
    rollMany(0, 17);
    expect(bowling.score()).toEqual(24);
  });

  it ('can play a perfect game', () => {
    rollMany(10, 12);
    expect(bowling.score()).toEqual(300);
  });

  it('throws an error when wrong number of pins is called', () => {
    expect(() => { bowling.roll(12) }).toThrow('Can only roll values of 10 and below')
  });

  it('can score a strike in the 10th frame', function() {
    rollMany(3, 18);
    bowling.roll(10);
    bowling.roll(4);
    bowling.roll(5);
    expect(bowling.score()).toEqual(73);
  });

  it('can score a spare in the 10th frame', function() {
    rollMany(4, 18);
    bowling.roll(8);
    bowling.roll(2);
    bowling.roll(5);
    expect(bowling.score()).toEqual(87);
  });
});
