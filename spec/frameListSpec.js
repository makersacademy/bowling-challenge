describe("FrameList", () => {
  var frameList;
  beforeEach(() => {
    frameList = new FrameList();
  });

  describe("add", () => {
    it("adds last frame to the frame list", () => {
      frameList.add(5, 3);
      expect(frameList.frames).toEqual({ 1: 8 });
    });

    it("adds Spare to the frame list when player spare", () => {
      frameList.add(5, 5);
      expect(frameList.frames).toEqual({ 1: "Spare" });
    });

    it("adds Strike to the frame list when player Strikes", () => {
      frameList.add("Strike");
      expect(frameList.frames).toEqual({ 1: "Strike" });
    });
  });

  describe("calculate", () => {
    it("add Strike + bonus from the next round", () => {
      frameList.add("Strike");
      frameList.add(4, 1);
      expect(frameList.displayFrames).toEqual(["Strike", 20]);
    });

    it("add Strike + bonus from the next round", () => {
      frameList.add(5, 5);
      frameList.add(4, 1);
      expect(frameList.displayFrames).toEqual(["Spare", 19]);
    });

    it("add Strike + Spare + bonus from the next round", () => {
      frameList.add("Strike");
      frameList.add(5, 5);
      frameList.add(4, 1);
      expect(frameList.displayFrames).toEqual(["Strike", "Spare", 39]);
    });

    it("add Spare + Strike + bonus from the next round", () => {
      frameList.add("Spare");
      frameList.add("Strike");
      frameList.add(4, 1);
      expect(frameList.displayFrames).toEqual(["Spare", "Strike", 40]);
    });

    it("add Strike + Strike + bonus from the next round", () => {
      frameList.add("Strike");
      frameList.add("Strike");
      frameList.add(4, 2);
      expect(frameList.displayFrames).toEqual(["Strike", "Strike", 42]);
    });
  });
});
