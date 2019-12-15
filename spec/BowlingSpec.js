describe("Bowling", () => {

  let testBowling;

  beforeEach(() => {
    testBowling = new Bowling;
  });

  describe("frames", () => {
    it("should be able to keep track of frames", () => {
      testBowling.rolls(3, 5)
      testBowling.rolls(3, 3)
      expect(testBowling.frames.length).toEqual(2);
    });
  });

  describe("inputting rolls", () => {
    it("can input rolls and add them to current score", () => {
      testBowling.rolls(1, 5)
      expect(testBowling.currentScore).toEqual(6);
    });

    it("can add the just rolled frame to frames", () => {
      testBowling.rolls(2, 6)
      expect(testBowling.frames).toContain([2, 6]);
    });
  });

  describe("strike", () => {
    it("if the first roll in the frame is a 10 don't add to current score", () => {
      testBowling.rolls(10, 0)
      expect(testBowling.currentScore).toEqual(0);
    });

    it("if the first roll in the frame is a 10, log a strike", () => {
      testBowling.rolls(10, 0)
      expect(testBowling.strikes).toEqual(1);
    });

    it("if there is one strike previously logged, add 10 and double the current frame score to the current score", () => {
      testBowling.rolls(10, 0)
      testBowling.rolls(6, 2)
      expect(testBowling.currentScore).toEqual(26)
    });

  });

  describe("spare", () => {
    it("if each roll in the frame adds up to 10 don't add to current score", () => {
      testBowling.rolls(6, 4)
      expect(testBowling.currentScore).toEqual(0)
    });

    it("if each roll in the frame adds up to 10, log a spare", () => {
      testBowling.rolls(6, 4)
      expect(testBowling.spares).toEqual(1)
    });
  });

});
