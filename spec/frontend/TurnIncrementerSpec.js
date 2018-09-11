"use strict";

describe('TurnIncrementer', function() {
  var turnIncrementer;

  beforeEach(function() {
    turnIncrementer = new TurnIncrementer();
  })

  it('Instantiates with frame = 1 and roll = 0', function() {
    expect(turnIncrementer.turn).toEqual({ frame: 1, roll: 0});
  });

  it('Returns true if pins === 10', function() {
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
