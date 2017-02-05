describe('Scoresheet', function() {
  beforeEach(function() {
    aScoresheet = new Scoresheet();
  })

  it('starts with empty frames array,', function() {
    expect(aScoresheet.frames).toEqual([])
  })

  it('a score of zero,', function() {
    expect(aScoresheet.score).toEqual(0)
  })

  it('and with a new, empty current frame.', function() {
    expect(aScoresheet.currentFrame._rolls).toEqual([])
  })

  xit('It can add a frame score to the general score', function() {
    // ...
  })

  xit('up to a maximum of ten frames', function() {
    // ...
  })
})
