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
})