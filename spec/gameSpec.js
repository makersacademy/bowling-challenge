'use strict';

describe ('Game', function(){

  var game;

  beforeEach (function(){
    game = new Game
  });

  describe('.throw', function() {
    it('records two throws if not a strike', function() {
      game.throw(4)
      game.throw(4)
      expect(game.totalScore).toEqual(8)
      expect(game.throws).toEqual([4,4])
      expect(game.throwsRemaining).toEqual(18)
      expect(game.frameRunningTotals).toEqual([8])
    })
    it('records two throws equaling a spare', function() {
      game.throw(5)
      game.throw(5)
      expect(game.totalScore).toEqual(10)
      expect(game.throws).toEqual([5,5])
      expect(game.throwsRemaining).toEqual(18)
      expect(game.frameRunningTotals).toEqual([10])
    })

    it('records two throws equaling a spare and then another frame not equaling a spare', function() {
      game.throw(5)
      game.throw(5)
      game.throw(5)
      game.throw(0)
      expect(game.totalScore).toEqual(20)
      expect(game.throws).toEqual([5,5,5,0])
      expect(game.throwsRemaining).toEqual(16)
      expect(game.frameRunningTotals).toEqual([15, 5])
      expect(game.totalScore).toEqual(20)
    })
    it('records a strike correctly with bonus rolls', function() {
      game.throw(10)
      game.throw(1)
      game.throw(1)
      expect(game.totalScore).toEqual(14)
      expect(game.throws).toEqual([10,1,1])
      expect(game.throwsRemaining).toEqual(16)
      expect(game.frameRunningTotals).toEqual([12, 2])
      expect(game.totalScore).toEqual(14)
    })
    it('records a multiple strikes correctly with bonus rolls', function() {
      game.throw(10)
      game.throw(10)
      game.throw(10)
      expect(game.totalScore).toEqual(60)
      expect(game.throws).toEqual([10,10,10])
      expect(game.throwsRemaining).toEqual(14)
      expect(game.frameRunningTotals).toEqual([30, 20,10])
      // expect(game.showTotal).toEqual(30)
    })
    it('records a multiple strikes and spares correctly with bonus rolls', function() {
      game.throw(10)
      game.throw(5)
      game.throw(5)
      game.throw(10)
      game.throw(5)
      game.throw(5)
      game.throw(5)
      many_throws(11, 0)
      expect(game.totalScore).toEqual(80)
      expect(game.throwsRemaining).toEqual(0)
      expect(game.frameRunningTotals).toEqual([20, 20, 20, 15, 5, 0, 0, 0, 0, 0])
    })
  })

  var many_throws = function(times, pins) {
    for (var i = 0; i < times; i++) {
      game.throw(pins)
    }
  }

})

var many_throws = function(times, pins) {
  for (var i = 0; i < pins; i++) {
    game.throw(pins)
  }
}
