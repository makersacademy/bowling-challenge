describe("Feature", function() {
  it("returns complete scorecard after 10 frames", function() {
    scorecard = new Scorecard;
    frameNumber = 1;
    pinsScored = 0;
    for (frameNumber; frameNumber < 11; frameNumber++) {
      frame = new Frame;
      frame.totalScore = 0;
      scorecard.frames.push(frame);
    }
    expect(scorecard.isComplete()).toBe(true);
  });
  
});