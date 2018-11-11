"use strict";

describe("Bowling", function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it("Prints Hello World", function() {
    // spyOn(song, 'persistFavoriteStatus');

    expect(bowling.hello).toContain('Hello World');
  });

  it("score starts at zero", function() {
    expect(bowling.returnScore()).toEqual(0);
  });

  it("Strike frame score is 10", function() {
    expect(bowling.strikeFrame).toEqual(10);
  });

  it("upScore adds to the score", function() {
    bowling.upScore(7);
    expect(bowling.returnScore()).toEqual(7);
  });

  it("adds one to the frame when a ball is rolled", function() {
    bowling.upScore(1);
    expect(bowling.returnFrame()).toEqual(2);
  });

  it("returns frame to 1 on second bowl", function() {
    bowling.upScore(1);
    bowling.upScore(1);
    expect(bowling.returnFrame()).toEqual(1);
  });

  it('scores correctly for a strike', function() {
    bowling.upScore(2);
    bowling.upScore(4);
    bowling.isStrike();
    expect(bowling.returnScore()).toEqual(22);
  });

});
