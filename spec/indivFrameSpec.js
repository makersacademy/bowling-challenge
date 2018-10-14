describe('indivFrame', function() {
  let frame
  beforeEach(function() {
    frame = new indivFrame()
  })
  describe('instantiation', function() {
    it('rolls is set to empty', function() {
      expect(frame.rolls).toEqual([])
    })
  })

  describe('add', function() {
    it('adds argument to roll array', function() {
      frame.add(5)
      expect(frame.rolls).toEqual([5])
      frame.add(4)
      expect(frame.rolls).toEqual([5,4])
    })
  })

  describe('isFull', function() {
    it('returns true if rolls greater than 1', function() {
      frame.add(5)
      frame.add(4)
      expect(frame.isFull()).toEqual(true)
    })

    it('returns false if rolls 1 or less', function() {
      frame.add(4)
      expect(frame.isFull()).toEqual(false)
    })

    it('returns true if rolls score eq 10', function() {
      frame.add(10)
      expect(frame.isFull()).toEqual(true)
    })
  })

  describe('reset', function() {
    it('resets rolls to empty array', function() {
      frame.add(5)
      frame.reset()
      expect(frame.rolls).toEqual([])
    })
  })

  describe('sum', function() {
    it('returns sum of rolls', function() {
      frame.add(5)
      expect(frame.sum()).toEqual(5)
      frame.add(4)
      expect(frame.sum()).toEqual(9)
    })
  })

  describe('allKnocked', function() {
    it('returns true if spare or strike', function() {
      frame.add(5)
      frame.add(5)
      expect(frame.allKnocked()).toEqual(true)
    })

    it('return false otherwise', function() {
      frame.add(3)
      frame.add(4)
      expect(frame.allKnocked()).toEqual(false)
    })
  })
})
