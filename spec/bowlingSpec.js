'use strict';

describe ('Bowling', () => {
  let bowling;

  beforeEach( function() {
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
    spyOn(bowling, '_isWrongNumber').and.callFake(function() { return true });
    expect(function() { bowling.roll(12) } ).toThrow('Can only roll values of 10 and below');
  });
});
