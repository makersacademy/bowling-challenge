"use strict"

describe("Bowling", function () {
  var bowling;

  beforeEach(function () {
    bowling = new Bowling(frames);
  });

  it("can roll a gutter game", function () {
    rollMany(0,20)
    expect(bowling.score()).toEqual(0)
  });

  it("can roll a spare", function () {
    bowling.roll(4)
    bowling.roll(6)
    bowling.roll(2)
    rollMany(0,17)
    expect(bowling.score()).toEqual(14)
  });

  it("can roll a strike", function () {
    bowling.roll(10)
    bowling.roll(2)
    bowling.roll(2)
    rollMany(0,16)
    expect(bowling.score()).toEqual(18)
  });

  it("can bowl a perfect game", function () {
    rollMany(10,12)
    expect(bowling.score()).toEqual(300)
  });

  it("can end the game", function () {
    rollMany(2, 20)
    bowling.endGame()
    expect(bowling.gameOver).toBe(true)
  });

  it("can return the number of frames", function () {
    bowling.roll(2)
    bowling.roll(2)
    expect(bowling.gameOver).toBe(false)
  });

  var rollMany = function (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      bowling.roll(pins)
    }
  }

});