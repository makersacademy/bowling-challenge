'use strict';

describe("Bowling", function () {
  var bowling;


  beforeEach(function () {
    bowling = new Bowling();
  });

  it("should return a score after the first bowl", function () {
    bowling.firstBowl()
    expect(bowling.score).toEqual(5);
  });

  it("should respond to the random score generator", function () {
    spyOn(Math, "random").and.returnValue(0.5)
    expect(bowling.randomScore()).toEqual(5)
  });

});