describe("Version4", () => {
  var frameList;
  beforeEach(() => {
    frameList = new Version4();
  });

  // it("Calculate Spare + bonus", () => {
  //   frameList.play(5, 5);
  //   frameList.play(5, 1);
  //   expect(frameList.frames).toEqual(["Spare", 5, 1]);
  //   expect(frameList.scores).toEqual([15, 5, 1]);
  // });

  // it("plays Spare to the frame list when player spare", () => {
  //   frameList.play(10);
  //   frameList.play(5, 2);
  //   expect(frameList.frames).toEqual(["Strike", 5, 2]);
  //   expect(frameList.scores).toEqual([17, 5, 2]);
  // });

  it("plays Spare to the frame list when player spare", () => {
    console.log("here");
    frameList.play(10);
    frameList.play(10);
    frameList.play(5, 2);

    expect(frameList.frames).toEqual(["Strike", "Strike", 5, 2]);
    expect(frameList.scores).toEqual([25, 17, 5, 2]);
  });
});
