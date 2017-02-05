describe('Frame', function() {
  beforeEach(function() {
    frame = new Frame();
  })

  it('starts with empty rolls array,', function() {
    expect(frame.rolls).toEqual([])
  })

  it('where it can store roll scores,', function() {
    frame.addRoll(5)
    frame.addRoll(2)
    expect(frame.rolls).toEqual([5, 2])
  })

  it('but no more than FRAME_SIZE (2).', function() {
    frame.addRoll(2)
    frame.addRoll(3)
    frame.addRoll(4)
    expect(frame.rolls).toEqual([2, 3])
  })

  it('It is linked to a scoresheet', function() {
    expect(frame.scoresheet).toBe('Scoresheet') // TBD!
  })

  it('from which it initialises its own (frame) score', function() {
    expect(frame.frameScore).toEqual(frame.scoresheet.score)
  })

})
