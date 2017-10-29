'use strict';

describe ('Frame', function () {

var frame = new Frame;

  it('has starts 10 pins', function () {
    expect(frame._pinsRemaining).toBe(10)
  })

  it('starts on the first roll', function () {
    expect(frame._rollTurn).toBe(1)
  })


})

