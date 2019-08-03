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
      expect(game.frameRunningTotals).toEqual([8])
    })

    it('records a strike correctly with bonus rolls', function() {
      game.throw(10)
      game.throw(1)
      game.throw(1)
      expect(game.totalScore).toEqual(14)
      expect(game.throws).toEqual([10,1,1])
      expect(game.frameRunningTotals).toEqual([12, 2])
      expect(game.totalScore).toEqual(14)
    })
    it('records a multiple strikes correctly with bonus rolls', function() {
      game.throw(10)
      game.throw(10)
      game.throw(10)
      expect(game.totalScore).toEqual(60)
      expect(game.throws).toEqual([10,10,10])
      expect(game.throwsRemaining).toEqual(15)
      expect(game.frameRunningTotals).toEqual([30, 20,10])
      // expect(game.showTotal).toEqual(30)
    })
    it('records a multiple strikes and spares correctly with bonus rolls', function() {
      game.throw(10)
      throwSpare()
      game.throw(10)
      throwSpare()
      game.throw(5)
      manyThrows(11, 0)
      expect(game.totalScore).toEqual(80)
      expect(game.throwsRemaining).toEqual(0)
      expect(game.frameRunningTotals).toEqual([20, 20, 20, 15, 5, 0, 0, 0, 0, 0])
    })

    it('total score is 0 for gutter game', function() {
      manyThrows(19, 0)
      // console.log(game)
      // debugger
      game.throw(0)
      // console.log(game)
      // debugger
      expect(game.totalScore).toEqual(0)
      expect(game.throwsRemaining).toEqual(0)
    })
    it('throw after a completed game starts a new game', function() {
      manyThrows(20, 0)
      game.throw(1)
      game.throw(1)
      expect(game.totalScore).toEqual(2)
      expect(game.throwsRemaining).toEqual(19)
    })

    it('total score 300 for perfect game', function() {
      manyThrows(10, 10)
      game.throw(10)
      game.throw(10)
      expect(game.totalScore).toEqual(300)
      expect(game.throwsRemaining).toEqual(0)
    })
    it('correctly handles spare in frame 10', function() {
      manyThrows(19, 0)
      game.throw(10)
      game.throw(10)
      expect(game.totalScore).toEqual(20)
      expect(game.throwsRemaining).toEqual(0)
    })
  })

  var manyThrows = function(times, pins) {
    for (var i = 0; i < times; i++) {
      game.throw(pins)
    }
  }

  var throwSpare = function() {
    game.throw(5)
    game.throw(5)
  }

})
