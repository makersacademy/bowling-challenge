describe("Scorecard", function () {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
    frame = new Frame()
  });

  it('should default with no frames to score', function() {
    expect(scorecard.frames).toEqual([])
  });

  it('should add a frame to frames', function() {
    frame.add(3)
    frame.add(4)
    scorecard.add(frame.score)
    expect(scorecard.frames).toEqual([frame.score])
  })

})
