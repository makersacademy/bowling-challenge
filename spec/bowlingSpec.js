'use strict';

describe ('Bowling', () => {
  let bowling;

  beforeEach( function() {
    // eslint-disable-next-line no-undef
    bowling = new Bowling();
  });

  function rollMany(pins, rolls) {
    for (let i = 0; i < rolls; i++) {
      bowling.roll(pins);
    }
  }

  it('can score a gutter game', function() {
    rollMany(0, 20);
    expect(bowling.score()).toEqual(0);
  });

  it('can score 20 for a game of all 1s', function() {
    rollMany(1, 20);
    expect(bowling.score()).toEqual(20);
  });
  
  it('can score a spare round', function() {
    bowling.roll(5);
    bowling.roll(5);
    bowling.roll(3);
    rollMany(0, 17);
    expect(bowling.score()).toEqual(16); 
  });

  it('can score a strike', function() {
    bowling.roll(10);
    bowling.roll(5);
    bowling.roll(2);
    rollMany(0, 17);
    expect(bowling.score()).toEqual(24);
  });

  it('can play a perfect game', function() {
    rollMany(10, 12);
    expect(bowling.score()).toEqual(300);
  });

  it('throws an error when wrong number of pins is called', function() {
    expect(function() { bowling.roll(12) } ).toThrow('Can only roll positive values of 10 and below');
  });

  it('throws an error when negative number of pins is called', function() {
    expect(function() { bowling.roll(-1) } ).toThrow('Can only roll positive values of 10 and below');
  });

  it('calculates a strike in the 10th frame', function() {
    rollMany(3, 18);
    bowling.roll(10);
    bowling.roll(4);
    bowling.roll(5);
    expect(bowling.score()).toEqual(73);
  });

  it('calculates a spare in the 10th frame', function() {
    rollMany(4, 18);
    bowling.roll(8);
    bowling.roll(2);
    bowling.roll(5);
    expect(bowling.score()).toEqual(87);
  });
});
