"use strict";

describe("Scoring", () => {
  let scoring;
  let frame;
  let frame2;
  let frame3;
  let frame4;
  let frame10;

  beforeEach(() => {
    scoring = new Scoring();
    frame = jasmine.createSpyObj("frame", [
      "rollOne",
      "rollTwo",
      "isFinalFrame",
    ]);
  });

  describe("Single (normal) frame tests", () => {
    it("adds two integers in a frame", () => {
      frame.rollOne.and.returnValue(4);
      frame.rollTwo.and.returnValue(3);
      expect(scoring.calculateScore([frame])).toEqual([7]);
    });

    it("finishes calculating score if first roll of a frame is null", () => {
      frame.rollOne.and.returnValue(null);
      expect(scoring.calculateScore([frame])).toEqual([]);
    });

    it("calculates incomplete frame if second roll of frame is null", () => {
      frame.rollOne.and.returnValue(1);
      frame.rollTwo.and.returnValue(null);
      expect(scoring.calculateScore([frame])).toEqual([1]);
    });
  });

  describe("Spare/strike (normal) frame tests", () => {
    beforeEach(() => {
      frame2 = jasmine.createSpyObj("frame", [
        "rollOne",
        "rollTwo",
        "isFinalFrame",
      ]);
    });

    describe("spare handling", () => {
      beforeEach(() => {
        frame.rollOne.and.returnValue(3);
        frame.rollTwo.and.returnValue(7);
      });

      it("handles spare if next frame is null", () => {
        frame2.rollOne.and.returnValue(null);
        expect(scoring.calculateScore([frame, frame2])).toEqual([10]);
      });

      it("handles spare frame bonus", () => {
        frame2.rollOne.and.returnValue(5);
        frame2.rollTwo.and.returnValue(null);
        expect(scoring.calculateScore([frame, frame2])).toEqual([15, 5]);
      });
    });

    describe("strike handling", () => {
      beforeEach(() => {
        frame.rollOne.and.returnValue(10);
        frame.rollTwo.and.returnValue(0);
      });

      describe("strike handling: single strike scenarios", () => {
        it("handles strike if following frame is null", () => {
          frame2.rollOne.and.returnValue(null);
          expect(scoring.calculateScore([frame, frame2])).toEqual([10]);
        });

        it("handles strike if next frame has one, non-strike roll", () => {
          frame2.rollOne.and.returnValue(5);
          frame2.rollTwo.and.returnValue(null);
          expect(scoring.calculateScore([frame, frame2])).toEqual([15, 5]);
        });

        it("handles strike if next frame is two non-strike rolls", () => {
          frame2.rollOne.and.returnValue(5);
          frame2.rollTwo.and.returnValue(3);
          expect(scoring.calculateScore([frame, frame2])).toEqual([18, 8]);
        });
      });

      describe("strike handling: multi-strike scenarios", () => {
        beforeEach(() => {
          frame3 = jasmine.createSpyObj("frame", [
            "rollOne",
            "rollTwo",
            "isFinalFrame",
          ]);
          frame2.rollOne.and.returnValue(10);
          frame2.rollTwo.and.returnValue(0);
        });

        it("handles strike if next frame a strike followed by null frame", () => {
          frame3.rollOne.and.returnValue(null);
          expect(scoring.calculateScore([frame, frame2, frame3])).toEqual([
            20, 10,
          ]);
        });

        it("handles strike followed by strike followed by non-strike", () => {
          frame3.rollOne.and.returnValue(5);
          frame3.rollTwo.and.returnValue(null);
          expect(scoring.calculateScore([frame, frame2, frame3])).toEqual([
            25, 15, 5,
          ]);
        });

        it("handles turkey", () => {
          frame4 = jasmine.createSpyObj("frame", [
            "rollOne",
            "rollTwo",
            "isFinalFrame",
          ]);
          frame3.rollOne.and.returnValue(10);
          frame3.rollTwo.and.returnValue(0);
          frame4.rollOne.and.returnValue(null);
          expect(
            scoring.calculateScore([frame, frame2, frame3, frame4])
          ).toEqual([30, 20, 10]);
        });
      });
    });
  });

  describe("penultimate and last frame tests", () => {
    beforeEach(() => {
      scoring = new Scoring();
      frame10 = jasmine.createSpyObj("frame", [
        "rollOne",
        "rollTwo",
        "rollThree",
        "isFinalFrame",
      ]);
      frame10.isFinalFrame.and.returnValue(true);
    });

    describe("ninth frame strikes", () => {
      beforeEach(() => {
        frame.rollOne.and.returnValue(10);
        frame.rollTwo.and.returnValue(0);
      });

      it("handles ninth frame strike followed by non-strikes", () => {
        frame10.rollOne.and.returnValue(5);
        frame10.rollTwo.and.returnValue(2);
        expect(scoring.calculateScore([frame, frame10])).toEqual([17, 7]);
      });

      it("handles ninth frame strike followed by strikes", () => {
        frame10.rollOne.and.returnValue(10);
        frame10.rollTwo.and.returnValue(10);
        frame10.rollThree.and.returnValue(null);
        expect(scoring.calculateScore([frame, frame10])).toEqual([30, 20]);
      });
    });

    describe("last frame tests", () => {
      it("calculates last frame with no bonus", () => {
        frame10.rollOne.and.returnValue(4);
        frame10.rollTwo.and.returnValue(2);
        frame10.rollThree.and.returnValue(1);
        expect(scoring.calculateScore([frame10])).toEqual([6]);
      });

      it("calculates last frame with spare bonus", () => {
        frame10.rollOne.and.returnValue(3);
        frame10.rollTwo.and.returnValue(7);
        frame10.rollThree.and.returnValue(5);
        expect(scoring.calculateScore([frame10])).toEqual([15]);
      });

      it("calculates last frame with strike bonus", () => {
        frame10.rollOne.and.returnValue(10);
        frame10.rollTwo.and.returnValue(4);
        frame10.rollThree.and.returnValue(4);
        expect(scoring.calculateScore([frame10])).toEqual([18]);
      });

      it("calculates last frame triple strike", () => {
        frame10.rollOne.and.returnValue(10);
        frame10.rollTwo.and.returnValue(10);
        frame10.rollThree.and.returnValue(10);
        expect(scoring.calculateScore([frame10])).toEqual([30]);
      });
    });
  });
});
