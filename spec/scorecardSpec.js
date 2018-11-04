describe("Scorecard", function () {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard()
  });

  it('should default with no frames to score', function() {
    expect(scorecard.frames).toEqual([])
  });

  it('should add a frame to frames', function() {
    scorecard.add(3)
    scorecard.add(4)
    expect(scorecard.frames).toEqual([3, 4])
  });

  it('should show the sum of the first frame', function () {
    scorecard.add(3)
    scorecard.add(4)
    scorecard.sum()
    expect(scorecard.score).toEqual(7)
  });

  it('should show the sum of all frames', function () {
    scorecard.add(3)
    scorecard.add(4)
    scorecard.add(3)
    scorecard.add(4)
    scorecard.sum()
    expect(scorecard.score).toEqual(14)
  });

  it('should not show the sum of all frames if the last frame was a strike', function () {
    scorecard.add(3)
    scorecard.add(4)
    scorecard.add(10)
    scorecard.sum()
    expect(scorecard.score).toEqual(7)
  })

  it('should show the sum including the strike and bonus after the next 2 rolls', function () {
    scorecard.add(3)
    scorecard.add(4)
    scorecard.add(10)
    scorecard.add(3)
    scorecard.add(4)
    scorecard.sum()
    expect(scorecard.score).toEqual(31)
  })

  it('should not show the sum of all frames if the last frame was a spare', function () {
    scorecard.add(3)
    scorecard.add(4)
    scorecard.add(5)
    scorecard.add(5)
    scorecard.sum()
    expect(scorecard.score).toEqual(7)
  })

  it('should show the sum including the strike and bonus after the next 2 rolls', function () {
    scorecard.add(3)
    scorecard.add(4)
    scorecard.add(5)
    scorecard.add(5)
    scorecard.add(3)
    scorecard.add(4)
    scorecard.sum()
    expect(scorecard.score).toEqual(27)
  })


})
