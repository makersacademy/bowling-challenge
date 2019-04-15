'use strict'

describe('Scorecard', function(){

  var scorecard
  beforeEach(function(){
    scorecard = new Scorecard()
  })

  describe('gutter balls', function(){
    it('gives zero score', function(){
      scorecard.roll([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0])
      expect(scorecard.total()).toEqual(0)
      expect(scorecard.isComplete()).toBe(true)
    })
  })

  describe('one frame game', function(){
    it('gives accumulative total score', function(){
      scorecard.roll([4,4, 4,4, 4,4, 4,4, 4,4, 4,4, 4,4, 4,4, 4,4, 4,4])
      expect(scorecard.total()).toEqual(80)
      expect(scorecard.isComplete()).toBe(true)
    })
  })

  describe('spare game', function(){
    it('gives accumulative total', function(){
      scorecard.roll([3,7, 6,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0])
      expect(scorecard.total()).toEqual(22)
      expect(scorecard.isComplete()).toBe(true)
    })
  })

  describe('strike game', function(){
    it('gives accumulative total', function(){
      scorecard.roll([10, 4,3, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0])
      expect(scorecard.total()).toEqual(24)
      expect(scorecard.isComplete()).toBe(true)
    })
  })

  describe('perfect game', function(){
    it('gives accumulative total', function(){
      scorecard.roll([10, 10, 10, 10, 10, 10,10, 10, 10, 10, 10,10])
      expect(scorecard.total()).toEqual(300)
      expect(scorecard.isComplete()).toBe(true)
    })
  })

  describe('10th frame', function(){
    it('calculates 10th frame score with 2 rolls', function(){
      scorecard.roll([3,7, 6,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 3,4])
      expect(scorecard.total()).toEqual(29)
      expect(scorecard.isComplete()).toBe(true)
    })
    
    // it('calculates 10th frame score with 3 rolls with spare', function(){
    //   scorecard.roll([3,7, 6,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 4,6,4])
    //   expect(scorecard.total()).toEqual(40)
    //   expect(scorecard.isComplete()).toBe(true)
    // })

    // it('calculates 10th frame score with 3 rolls with strike', function(){
    //   scorecard.roll([3,7, 6,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10,4,4])
    //   expect(scorecard.total()).toEqual(48)
    //   expect(scorecard.isComplete()).toBe(true)
    // })
  })
})