'use strict'

describe('Frame', function(){
  var frame 
  var frame2

  beforeEach(function(){
    frame = new Frame
    frame2 = new Frame
  })

  describe('keeps rolls in array',function(){
    it('returns empty array when it is initialized', function(){
      expect(frame._throws).toEqual([])
    })
    it('has a _nextframe attribute',function(){
      expect(frame._nextframe).toEqual(null)
    })
  })
  
  describe('createNextFrame', function(){
    it('creates a next frame', function(){
      frame.createNextFrame()
      expect(frame._nextframe).not.toBe(null)
    })
    it('returns the second frame if already created', function(){
      frame.createNextFrame()
      expect(frame.createNextFrame()).toEqual(frame._nextframe)
    })
  })

  describe('addroll', function(){
    it('takes a player rolls and the value is stored', function(){
      frame.addroll(1)
      expect(frame._throws).toContain(1)
    })
    it('fils the array',function(){
      frame.addroll(1)
      frame.addroll(3)
      expect(frame._throws).toEqual([1,3])
    })
  })

  describe('check_strike', function(){
    it('returns true if a player has rolled a strike', function(){
      frame.addroll(10)
      expect(frame.check_strike()).toEqual(true)
    })
  })

  describe('check_spare',function(){
    it('returns true if a spare is rolled', function(){
      frame.addroll(8)
      frame.addroll(2)
      expect(frame.check_spare()).toEqual(true)
    })
  })

  describe('score_frame', function(){
    it('sums the elements of 2 digit frame', function(){
      frame.addroll(4)
      frame.addroll(3)
      expect(frame.score_frame()).toEqual(7)
    })
    it('sums the elements of 3 digit frame', function(){
      frame.addroll(10)
      frame.addroll(4)
      frame.addroll(3)
      expect(frame.score_frame()).toEqual(17)
    })
    it('returns zero if the two elements are zero', function(){
      frame.addroll(0)
      frame.addroll(0)
      expect(frame.score_frame()).toEqual(0)
    })
  })

  describe('spare_score', function(){
    it('will score a spare correctly', function(){
      frame.addroll(6)
      frame.addroll(4)
      frame.createNextFrame(frame2)
      frame._nextframe.addroll(3)
      expect(frame.spare_score()).toEqual(13)
    })
  })

  describe('strike_score', function(){
    it('will score a strike correctly', function(){
      frame.addroll(10)
      frame.createNextFrame(frame2)
      frame._nextframe.addroll(3)
      frame._nextframe.addroll(3)
      expect(frame.strike_score()).toEqual(16)
    })
  })

  describe('isStanding', function(){
    it('returns true if there are pins left in the ally', function(){
      frame.addroll(3)
      frame.addroll(3)
      expect(frame.isStanding()).toEqual(true)
    })
  })

  describe('clearFrame',function(){
    it('clears the throw array', function(){
      frame.addroll(3)
      frame.addroll(3)
      frame.clearFrame()
      expect(frame._throws).toEqual([])
    })
  })
})