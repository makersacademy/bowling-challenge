import Frame from "../src/Frame";

describe("Frame", () => {
  let frame: Frame;

  beforeEach(() => {
    frame = new Frame();
  });

  describe("#add_score", () => {
    it("should add scores to the correct roll until the frame ended.", () => {
      frame.add_score(4);
      expect(frame.getScores).toEqual([4, 0]);
      frame.add_score(6);
      expect(frame.getScores).toEqual([4, 6]);
    });
  });

  describe("#total_score", () => {
    it("should add up scores of the frame", () => {
      frame.add_score(4);
      frame.add_score(2);
      expect(frame.total_score()).toEqual(6);
    });
  });

  describe("#is_ended", () => {
    it("should return a correct boolean", () => {
      frame.add_score(2);
      expect(frame.is_ended()).toBe(false);
      frame.add_score(8);
      expect(frame.is_ended()).toBe(true);
    });

    it("should end the frame when the first score is 10", () => {
      frame.add_score(10);
      expect(frame.is_ended()).toBe(true);
    });

    it("should end on the 3rd roll if the frame is the 10th", () => {
      const frame = new Frame(true);
      frame.add_score(10);
      expect(frame.is_ended()).toBe(false);
      frame.add_score(10);
      expect(frame.is_ended()).toBe(false);
      frame.add_score(10);
      expect(frame.is_ended()).toBe(true);
    });
  });

  describe("#status", () => {
    it("should return 'strike' when the first roll is 10", () => {
      frame.add_score(10);
      expect(frame.status()).toEqual("strike");
    });

    it("should return 'spare' when the sum of two rolls is 10", () => {
      frame.add_score(2);
      frame.add_score(8);
      expect(frame.status()).toEqual("spare");
    });

    it("should return 'normal' when none of above is matched", () => {
      const frame = new Frame();
      frame.add_score(4);
      frame.add_score(5);
      expect(frame.status()).toEqual("normal");
    });
  });
});
