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

  it("should return true for final frame", function() {
    for (var i = 1; i < 10; i ++) {
      scorecard.addFrame(frame);
    }
    expect(scorecard.isFinalFrame()).toBe(true);
  });

  
  
});