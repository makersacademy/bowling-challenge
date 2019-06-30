describe('Frame', function(){
  var frame;
  var pins;

  beforeEach(function() {
    frame = new Frame()
  })

  it('returns the roll number', function() {
    expect(frame.rolls).toEqual([])
  })

  describe('addPins', function() {
    it('adds the roll\'s dropped pins', function() {
      frame.addPins(pins)
      expect(frame.rolls).toEqual([pins])
    })
  })

  describe('frameScore', function() {
    it('calculate the score of a single frame', function() {
      frame.addPins(4)
      frame.addPins(5)
      frame.frameScore()
      expect(frame.singleScore).toEqual(9)
    })
  })
})