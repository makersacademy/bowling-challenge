'use strict'

describe('Frame', function(){
  var frame 

  beforeEach(function(){
    frame = new Frame
  })

  describe('keeps rolls in array',function(){
    it('returns empty array when it is initialized', function(){
      expect(frame._throws).toEqual([])
    })
  })
  
  describe('addroll', function(){
    it('takes a player rolls and the value is stored', function(){
      frame.addroll(1)
      expect(frame._throws).toContain(1)
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
  })
})