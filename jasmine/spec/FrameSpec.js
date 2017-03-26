"use strict";

describe ("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  it("starts on roll 0", function() {
    expect(frame.roll).toEqual(0);
  });

  it("starts with an empty score", function() {
    expect(frame.score).toEqual([]);
  });

  describe("tracks roll", function() {
    it("can move to next roll", function() {
      frame.nextRoll();
      expect(frame.roll).toEqual(1);
    });
  });

  describe("adds points", function() {
    it("adds points when the user inputs pins they knocked down", function() {
      frame.performFrameActions(5);
      frame.performFrameActions(2);
      expect(frame.score).toEqual([5, 2]);
    });

    it("moves to the next roll when the user inputs pins they knocked down", function() {
      frame.performFrameActions(5);
      expect(frame.roll).toEqual(1);
    });

    it("sums the points", function() {
      frame.performFrameActions(5);
      frame.performFrameActions(2);
      frame.sumPoints();
      expect(frame.totalScore).toEqual(7);
    });

    it("throws an error if user inputs a score that is greater than 10", function() {
      expect(function() { frame.performFrameActions(11) }).toThrow("Maximum score exceeded, please input a score of less than 10")
    });

    it("throws an error if user inputs two scores for a frame that add up to greater than 10", function() {
      frame.performFrameActions(5);
      expect(function() { frame.performFrameActions(6) }).toThrow("Maximum score for frame exceeded, rolls must add up to 10 or less")
    });

  });

  describe("checks if strike or spare", function() {
    it("checks whether player got a strike", function() {
      frame.performFrameActions(10);
      expect(frame.strike).toEqual(true);
    });

    it("checks whether player got a spare", function() {
      frame.performFrameActions(5);
      frame.performFrameActions(5);
      expect(frame.spare).toEqual(true);
    });
  });




});
