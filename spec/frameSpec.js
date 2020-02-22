describe('Frame', function() {
  var frame

  beforeEach(function() {
    frame = new Frame()
  })

  describe('rolls', function() {
    it('both start with value 0', function() {
      expect(frame.roll_one).toEqual(0)
      expect(frame.roll_two).toEqual(0)
    })
  })

  describe('add_roll_one_score', function () {
    it('adds the score for roll one', function (){
      frame.add_roll_one_score(3)
      expect(frame.roll_one).toEqual(3)
    })
  })

  describe('add_roll_two_score', function () {
    it('adds the score for roll two', function (){
      frame.add_roll_two_score(6)
      expect(frame.roll_two).toEqual(6)
    })
  })

  describe('isStrike', function() {
    it('returns true if frame is a strike', function() {
      frame.add_roll_one_score(10)
      expect(frame.isStrike()).toBe(true)
    })
  })

  describe('isSpare', function() {
    it('returns true if frame is a spare', function() {
      frame.add_roll_one_score(4)
      frame.add_roll_two_score(6)
      expect(frame.isSpare()).toBe(true)
    })
  })
})