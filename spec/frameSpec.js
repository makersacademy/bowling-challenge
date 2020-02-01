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

  

})