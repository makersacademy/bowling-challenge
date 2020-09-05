describe("FrameList", () => {
  var frameList;
  beforeEach(() => {
    frameList = new FrameList();
  });

  describe("add", () => {
    it("adds last frame to the frame list", () => {
      frameList.add(5, 3);
      expect(frameList.frames).toEqual([8]);
    });

    it("adds Spare to the frame list when player spare", () => {
      frameList.add(5, 5);
      expect(frameList.frames).toEqual(["Spare"]);
    });

    it("adds Strike to the frame list when player Strikes", () => {
      frameList.add("Strike");
      expect(frameList.frames).toEqual(["Strike"]);
    });
  });
});
