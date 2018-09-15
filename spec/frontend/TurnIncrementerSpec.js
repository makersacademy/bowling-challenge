"use strict";

describe('TurnIncrementer', function() {
  var turnIncrementer;

  beforeEach(function() {
    turnIncrementer = new TurnIncrementer();
  })

  it('Instantiates with frame = 1 and roll = 0', function() {
    expect(turnIncrementer.turn).toEqual({ frame: 1, roll: 0});
  });

  it('Returns true for first roll', function() {
    expect(turnIncrementer.isNewFrame(2)).toEqual(true);
  });

  it('Returns true if pins === 10', function() {
    expect(turnIncrementer.isNewFrame(10)).toEqual(true);
  });

  it('Returns true after strike on roll 3', function() {
    turnIncrementer.isNewFrame(1);
    turnIncrementer.isNewFrame(2);
    turnIncrementer.isNewFrame(10)
    expect(turnIncrementer.isNewFrame(2)).toEqual(true);
  });

  it('Returns false after strike on roll 3 and no strike on roll 4', function() {
    turnIncrementer.isNewFrame(1);
    turnIncrementer.isNewFrame(2);
    turnIncrementer.isNewFrame(10);
    turnIncrementer.isNewFrame(2)
    expect(turnIncrementer.isNewFrame(1)).toEqual(false);
  });

  it('Returns true for sequential strikes', function() {
    turnIncrementer.isNewFrame(10);
    turnIncrementer.isNewFrame(10);
    turnIncrementer.isNewFrame(10)
    expect(turnIncrementer.isNewFrame(10)).toEqual(true);
  });

  it('Returns true if roll is complete', function() {
    turnIncrementer.isNewFrame(2)
    turnIncrementer.isNewFrame(2)
    expect(turnIncrementer.isNewFrame(3)).toEqual(true)
  });

  it('Returns false otherwise', function() {
    turnIncrementer.isNewFrame(2)
    expect(turnIncrementer.isNewFrame(3)).toEqual(false)
  });
});
