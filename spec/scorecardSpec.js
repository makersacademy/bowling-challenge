describe("Scorecard", function () {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard()
    frame1 = new Frame()
    frame2 = new Frame()
  });

  it('should default with no frames to score', function() {
    expect(scorecard.frames).toEqual([])
  });

  it('should add a frame to frames', function() {
    frame1.add(3)
    frame1.add(4)
    scorecard.add(frame1.score)
    expect(scorecard.frames).toEqual([frame1.score])
  });

  it('should show the sum of the first frame', function () {
    frame1.add(3)
    frame1.add(4)
    scorecard.add(frame1.score)
    scorecard.sum()
    expect(scorecard.score).toEqual(7)
  });

  it('should show the sum of all frames', function () {
    frame1.add(3)
    frame1.add(4)
    scorecard.add(frame1.score)
    frame2.add(3)
    frame2.add(4)
    scorecard.add(frame2.score)
    scorecard.sum()
    expect(scorecard.score).toEqual(14)
  });

  it('should not show the sum of all frames if the last frame was a strike', function () {
    frame1.add(3)
    frame1.add(4)
    scorecard.add(frame1.score)
    frame2.add(10)
    scorecard.add(frame2.score)
    console.log(scorecard.frames)
    scorecard.sum()
    expect(scorecard.score).toEqual(7)
  })

})
