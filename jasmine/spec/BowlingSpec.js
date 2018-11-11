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
    expect(bowling.score).toEqual(0);
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
    expect(bowling.frameNum).toEqual(2);
  });

  it("returns frame to 1 on second bowl", function() {
    bowling.upScore(1);
    bowling.upScore(1);
    expect(bowling.frameNum).toEqual(1);
  });

  it('scores correctly for a strike', function() {
    bowling.upScore(10);
    bowling.upScore(2);
    bowling.upScore(4);
    expect(bowling.returnScore()).toEqual(22);
  });

  it('adds two rolls to the frame', function() {
    bowling.upScore(2);
    bowling.upScore(4);
    expect(bowling.returnScoreBoard()).toContain([2,4]);
  });

  it('goes to the next frame after two rolls', function() {
    bowling.upScore(2);
    bowling.upScore(4);
    bowling.upScore(6);
    expect(bowling.returnScoreBoard()).toContain([2,4], [6]);
  });
});
