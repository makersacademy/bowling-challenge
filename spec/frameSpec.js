describe('Frame', function() {
  var frame

  beforeEach(function() {
    frame = new Frame([0,0])
  })

  describe('isStrike', function() {
    it('returns true if frame is a strike', function() {
      var frame = new Frame([10,0])
      expect(frame.isStrike()).toBe(true)
    })
  })

  describe('isSpare', function() {
    it('returns true if frame is a spare', function() {
      var frame = new Frame([3,7])
      expect(frame.isSpare()).toBe(true)
    })

    it('returns false if frame is a strike', function() {
      var frame = new Frame([10,0])
      expect(frame.isSpare()).toBe(false)
    })
  })

  describe('total_without_bonus', function() {
    it('returns total excluding bonus', function() {
      var frame = new Frame([3,4])
      expect(frame.total_without_bonus()).toBe(7)
    })
  })

  describe('strikeBonus', function() {
    it('returns bonus from the next frame assuming getting a strike in this frame', function() {
      var next_frame = new Frame([8,2])
      var next_next_frame = new Frame([5, 4])
      expect(next_frame.strikeBonus(next_next_frame)).toEqual(10)
    })
  })

  describe('bonus', function() {
    it('returns no bonus if not a strike or spare', function() {
      var frame = new Frame(4, 3)
      expect(frame.bonus()).toEqual(0)
    })
  
    it('returns bonus if a spare', function() {
      var frame = new Frame([5, 5])
      var frame2 = new Frame([4, 6])
      var frame3 = new Frame([4, 2])
      expect(frame.bonus(frame2)).toEqual(4)
    })
  
    it('returns bonus if a spare', function() {
      var frame = new Frame([5, 5])
      var frame2 = new Frame([4, 6])
      var frame3 = new Frame([4, 2])
      expect(frame.bonus(frame2)).toEqual(4)
    })
  
    it('returns bonus if a strike', function() {
      var frame = new Frame([10, 0])
      var frame2 = new Frame([10, 0])
      var frame3 = new Frame([3, 2])
      expect(frame.bonus(frame2, frame3)).toEqual(13)
    })
  })
  
  describe('total_with_bonus', function() {
    it('returns the overall score for that frame', function() {
      var frame = new Frame([10, 0])
      var frame2 = new Frame([10, 0])
      var frame3 = new Frame([3, 2])
      expect(frame.total_with_bonus(frame2, frame3)).toEqual(23)
    })
  })
})

