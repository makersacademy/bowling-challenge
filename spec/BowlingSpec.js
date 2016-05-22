"use strict"

describe("Bowling", function () {
  var bowling;


  beforeEach(function () {
    bowling = new Bowling();
  });

  it("can roll a gutter game", function () {
    rollMany(0,20)
    expect(bowling.score()).toEqual(0)
  });

  it("should respond to the random score generator", function () {
    spyOn(Math, "random").and.returnValue(0.5)
    expect(bowling.randomScore()).toEqual(5)
  });

  it("can roll a spare", function () {
    bowling.roll(4)
    bowling.roll(6)
    bowling.roll(2)
    rollMany(0,17)
    expect(bowling.score()).toEqual(14)
  });

  var rollMany = function (pins, rolls) {
    for (var i = 0; i < rolls; i++) {
      bowling.roll(pins)
    }
  }

});