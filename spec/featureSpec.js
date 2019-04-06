'use strict'

describe('Feature test', function(){

  var scorecard
  beforeEach(function(){
    scorecard = new Scorecard()
  })

  describe('gutter balls', function(){
    it('gives zero score', function(){
      roll(20,0)
      expect(scorecard.total()).toEqual(0)
      expect(scorecard.isComplete()).toBe(true)
    })
  })

  describe('one frame game', function(){
    it('gives accumulative total score', function(){
      roll(20,4)
      expect(scorecard.total()).toEqual(80)
      expect(scorecard.isComplete()).toBe(true)
    })
  })

  describe('spare game', function(){
    it('gives accumulative total', function(){
      scorecard.roll(3)
      scorecard.roll(7)
      scorecard.roll(6)
      roll(18,0)
      expect(scorecard.total()).toEqual(22)
      expect(scorecard.isComplete()).toBe(true)
    })
  })

  function roll(times,pins) {
    for (var i = 0; i < times; i++) {
      scorecard.roll(pins)
    }
  }
})