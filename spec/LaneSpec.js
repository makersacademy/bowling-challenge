describe('A lane', function() {
  var lane;

  beforeEach(function() {
    lane = new Lane();
  })

  it('starts with a scoresheet with no played frames,', function() {
    expect(lane.game.playedFrames).toEqual([])
  })

  it('and a score of zero.', function() {
    expect(lane.game.currentFrame.frameScore).toEqual(0)
  })

  it('It can pass the number of downed pins to the game.', function() {
    lane.pass(5);
    expect(lane.game.currentFrame.frameScore).toEqual(5)
  })
})
