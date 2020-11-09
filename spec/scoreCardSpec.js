"use strict";

describe("Scorecard",  () => {
  var scorecard;
  var frame;
  var finalframe;

  beforeEach(function () {
    scorecard = new Scorecard();
    frame = jasmine.createSpyObj("airport", [
      "clearForLanding",
      "clearForTakeOff",
    ]);
  });
  describe("Play", () =>  {
    it("starts with 1 frame object", () =>  {
      expect(scorecard.frames.length).toBe(1);
      expect(scorecard.frames[0]).toBeInstanceOf(Frame);
    });

    it("adds new frame object if previous frame complete", () =>  {
      scorecard.play(9);
      scorecard.play(7);
      expect(scorecard.frames.length).toBe(2);
    });
  });
});
