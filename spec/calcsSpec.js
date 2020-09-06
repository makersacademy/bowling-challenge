describe("Xy", () => {
  var frameList;
  beforeEach(() => {
    frameList = new Xy();
  });

  describe("play", () => {
    it("plays last frame to the frame list", () => {
      frameList.play(5, 3);
      expect(frameList.frames).toEqual([5, 3]);
      expect(frameList.scores).toEqual([5, 3]);
    });

    it("Add Spare to the frame and 10point to score list when player spare", () => {
      frameList.play(5, 5);
      expect(frameList.frames).toEqual(["Spare"]);
      expect(frameList.scores).toEqual([10]);
    });

    it("Calculate Spare + bonus", () => {
      frameList.play(5, 5);
      frameList.play(5, 1);
      expect(frameList.frames).toEqual(["Spare", 5, 1]);
      expect(frameList.scores).toEqual([15, 5, 1]);
    });

    it("Add Strike to the frame list + 10 point when player Strike", () => {
      frameList.play("Strike");
      expect(frameList.frames).toEqual(["Strike"]);
      expect(frameList.scores).toEqual([10]);
    });

    it("plays Spare to the frame list when player spare", () => {
      frameList.play("Strike");
      frameList.play(5, 2);
      expect(frameList.frames).toEqual(["Strike", 5, 2]);
      expect(frameList.scores).toEqual([17, 5, 2]);
    });

    it("plays Spare to the frame list when player spare", () => {
      frameList.play("Strike");
      frameList.play("Strike");
      frameList.play(5, 2);

      expect(frameList.frames).toEqual(["Strike", "Strike", 5, 2]);
      expect(frameList.scores).toEqual([25, 17, 5, 2]);
    });

    it("Calculate Strike + Spare", () => {
      frameList.play("Strike");
      frameList.play(5, 5);
      frameList.play(5, 2);

      expect(frameList.frames).toEqual(["Strike", "Spare", 5, 2]);
      expect(frameList.scores).toEqual([20, 15, 5, 2]);
    });
  });
});
