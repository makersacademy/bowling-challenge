"use strict";

describe("Bowling", function () {
  let bowling;

  beforeEach(() => {
    bowling = new Bowling();
  });

  const rollHelper = (pins, rolls) => {
    for (let i = 0; i < rolls; i++) {
      bowling.roll(pins)
    }
  }


  it('when pin equals 0 returns correct score', () => {
    rollHelper(0, 20)
    expect(bowling.result()).toEqual(0)
  })

  it('when pin equals 1 returns correct score', () => {
    rollHelper(1, 20)
    expect(bowling.result()).toEqual(20)
  })


  it('when spare can calculate correct score', () => {
    bowling.roll(2);
    bowling.roll(8);
    bowling.roll(3);
    rollHelper(0, 17);
    expect(bowling.result()).toBe(13);
  });


});



