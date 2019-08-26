"use strict";

describe("Bowling", function () {
  let bowling;

  beforeEach(() => {
    bowling = new Bowling();
  });


  it('when pin equals 0 returns correct score', () => {
    for (let i = 0; i < 20; i++) {
      bowling.roll(0)
    }
    expect(bowling.result()).toEqual(0)
  })

  it('when pin equals 1 returns correct score', () => {
    for (let i = 0; i < 20; i++) {
      bowling.roll(1)
    }
    expect(bowling.result()).toEqual(20)
  })

});



