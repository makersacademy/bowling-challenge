
describe('Scorecard', function () {
  let scorecard

  beforeEach(function () {
    mockFrameClass = function() {}
    scorecard = new Scorecard(mockFrameClass)
  })

  it('should return current frame', function () {
    expect(scorecard.roll(7).currentFrame).toEqual(scorecard.frames[scorecard.frames.length - 1])
  })
})
