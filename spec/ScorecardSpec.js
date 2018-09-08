describe("Scorecard", function() {
  var scorecard; 
  var frame;

  beforeEach(function() {
    scorecard = new Scorecard();
    frame = new Frame();
  })

  it("should add a frame", function() {
    scorecard.addFrame(frame);
    expect(scorecard.frames.includes(frame)).toBe(true);
  });
});