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

  describe("scores", function() {
    it("should return 0 for gutter game", function() {
      for (var i = 1; i < 11; i ++) {
        frame.roll(0);
        frame.roll(0);
        scorecard.addFrame(frame);
      }
      expect(scorecard.score()).toEqual(0);
    })

    it("should return 300 for prefect game", function() {
      for (var i = 1; i < 10; i ++) {
        var f = new Frame();
        f.roll(10);
        scorecard.addFrame(f);
      }
        var f10 = new Frame(true);
        f10.roll(10);
        f10.roll(10);
        f10.roll(10);
        scorecard.addFrame(f10);
      expect(scorecard.score()).toEqual(300);
    })

  })
  
  
});