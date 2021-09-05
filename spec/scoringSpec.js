"use strict";

describe("Scoring", () => {
  let scoring;
  let frame;
  let frame2;
  let frame3;
  let frame4;

  beforeEach(() => {
    scoring = new Scoring();
    frame = jasmine.createSpyObj("frame", ["rollOne", "rollTwo", "getId"]);
  });

  describe("Single (normal) frame tests", () => {
    it("adds two integers in a frame", () => {
      frame.rollOne.and.returnValue(4);
      frame.rollTwo.and.returnValue(3);
      expect(scoring.calculateScore([frame])).toEqual([7]);
    });

    it("finishes calculating scores if first roll of a frame is null", () => {
      frame.rollOne.and.returnValue(null);
      expect(scoring.calculateScore([frame])).toEqual([]);
    });

    it("calculates incomplete frame if second roll of a frame is null", () => {
      frame.rollOne.and.returnValue(1);
      frame.rollTwo.and.returnValue(null);
      expect(scoring.calculateScore([frame])).toEqual([1]);
    });
  });

  describe("Spare/strike (normal) frame tests", () => {
    beforeEach(() => {
      frame2 = jasmine.createSpyObj("frame", ["rollOne", "rollTwo", "getId"]);
      frame3 = jasmine.createSpyObj("frame", ["rollOne", "rollTwo", "getId"]);
      frame4 = jasmine.createSpyObj("frame", ["rollOne", "rollTwo", "getId"]);
    });

    it("calculates spare as 10 if following frame is null", () => {
      frame.rollOne.and.returnValue(3);
      frame.rollTwo.and.returnValue(7);
      frame2.rollOne.and.returnValue(null);
      expect(scoring.calculateScore([frame, frame2])).toEqual([10]);
    });

    it("calculates spare frame bonus", () => {
      frame.rollOne.and.returnValue(3);
      frame.rollTwo.and.returnValue(7);
      frame2.rollOne.and.returnValue(5);
      frame2.rollTwo.and.returnValue(null);
      expect(scoring.calculateScore([frame, frame2])).toEqual([15, 5]);
    });

    it("calculates strike as 10 if following frame is null", () => {
      frame.rollOne.and.returnValue(10);
      frame.rollTwo.and.returnValue(0);
      frame2.rollOne.and.returnValue(null);
      expect(scoring.calculateScore([frame, frame2])).toEqual([10]);
    });

    it("calculates strike as 15 if following frame has one roll of 5", () => {
      frame.rollOne.and.returnValue(10);
      frame.rollTwo.and.returnValue(0);
      frame2.rollOne.and.returnValue(5);
      frame2.rollTwo.and.returnValue(null);
      expect(scoring.calculateScore([frame, frame2])).toEqual([15, 5]);
    });

    it("calculates strike as 18 if following frame rolls are 5 & 3", () => {
      frame.rollOne.and.returnValue(10);
      frame.rollTwo.and.returnValue(0);
      frame2.rollOne.and.returnValue(5);
      frame2.rollTwo.and.returnValue(3);
      expect(scoring.calculateScore([frame, frame2])).toEqual([18, 8]);
    });

    it("calculates strike as 20 if next frame a strike followed by null frame", () => {
      frame.rollOne.and.returnValue(10);
      frame.rollTwo.and.returnValue(0);
      frame2.rollOne.and.returnValue(10);
      frame2.rollTwo.and.returnValue(0);
      frame3.rollOne.and.returnValue(null);
      expect(scoring.calculateScore([frame, frame2, frame3])).toEqual([20, 10]);
    });

    it("calculates strike as 25 if next frame a strike followed by a 5", () => {
      frame.rollOne.and.returnValue(10);
      frame.rollTwo.and.returnValue(0);
      frame2.rollOne.and.returnValue(10);
      frame2.rollTwo.and.returnValue(0);
      frame3.rollOne.and.returnValue(5);
      frame3.rollTwo.and.returnValue(null);
      expect(scoring.calculateScore([frame, frame2, frame3])).toEqual([
        25, 15, 5,
      ]);
    });

    it("calculates turkey", () => {
      frame.rollOne.and.returnValue(10);
      frame.rollTwo.and.returnValue(0);
      frame2.rollOne.and.returnValue(10);
      frame2.rollTwo.and.returnValue(0);
      frame3.rollOne.and.returnValue(10);
      frame3.rollTwo.and.returnValue(0);
      frame4.rollOne.and.returnValue(null);
      expect(scoring.calculateScore([frame, frame2, frame3, frame4])).toEqual([
        30, 20, 10,
      ]);
    });
  });
});
