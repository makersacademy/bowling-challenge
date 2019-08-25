"use strict";

describe("Bowling", function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  it("Should start with an empty pins array", function() {
    expect(bowling.pins).toContain([]);
  });

  it("Should start with an empty score array", function() {
    expect(bowling.score).toContain([]);
  });

  it("Should add knocked over pins to array", function() {
    bowling.play(2);
    bowling.play(2);
    expect(bowling.pins).toContain([2, 2]);
  });

  it("Should add knocked over pins to array each frame", function() {
    bowling.play(2);
    bowling.play(2);
    bowling.play(2);
    bowling.play(2);
    expect(bowling.pins).toContain([2, 2], [2, 2], []);
  });

  it("Should move onto the next frame after 2 goes", function() {
    bowling.play(2);
    bowling.play(3);
    expect(bowling.frame).toEqual(1);
  });

  it("Should add the scores", function() {
    bowling.play(2);
    bowling.play(3);
    expect(bowling.score).toContain([5]);
  });

  it("Should add an empty array to scores and pins after 2 turns", function() {
    bowling.play(2);
    bowling.play(3);
    expect(bowling.pins).toEqual([[2, 3], []]);
    expect(bowling.score).toEqual([[5], []]);
  });

  it("should add the scores to each frame", function() {
    bowling.play(2);
    bowling.play(3);
    bowling.play(5);
    bowling.play(4);
    expect(bowling.score).toEqual([[5], [9], []]);
  });
});
