"use strict";

describe("Bowling", () => {
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

  it('calculate correct score from oridinary game', () => {
    rollHelper(2, 20)
    expect(bowling.result()).toEqual(40)
  })


  it('when spare can calculate correct score', () => {
    bowling.roll(2);
    bowling.roll(8);
    bowling.roll(3);
    rollHelper(0, 17);
    expect(bowling.result()).toBe(16);
  });

  it('when spike can calculate correct score', () => {
    bowling.roll(10);
    bowling.roll(4);
    bowling.roll(2);
    rollHelper(0, 17);
    expect(bowling.result()).toBe(22);
  });

  it('rolling a perfect game gives correct answer', function () {
    rollHelper(10, 12);
    expect(bowling.result()).toBe(300);
  });


});