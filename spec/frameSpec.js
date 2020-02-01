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
})