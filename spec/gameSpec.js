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
      // expect(game.index).toEqual(2)
      expect(game.frameRunningTotals).toEqual([8])
      expect(game.totalScore).toEqual(8)
      expect(game.showTotal).toEqual(8)
    })
    it('records two throws equaling a spare', function() {
      game.throw(5)
      game.throw(5)
      expect(game.totalScore).toEqual(10)
      expect(game.throws).toEqual([5,5])
      expect(game.throwsRemaining).toEqual(18)
      // expect(game.index).toEqual(2)
      expect(game.frameRunningTotals).toEqual([10])
      expect(game.totalScore).toEqual(10)
      expect(game.showTotal).toEqual(0)
    })

    it('records two throws equaling a spare and then another frame not equaling a spare', function() {
      // console.log(game.index)
      game.throw(5)
      // console.log(game.index)
      game.throw(5)
      // console.log(game.index)
      game.throw(5)
      // console.log(game.index)
      game.throw(0)
      // console.log(game.index)
      expect(game.totalScore).toEqual(20)
      expect(game.throws).toEqual([5,5,5,0])
      expect(game.throwsRemaining).toEqual(16)
      // expect(game.index).toEqual(4)
      expect(game.frameRunningTotals).toEqual([15, 5])
      expect(game.totalScore).toEqual(20)
      expect(game.showTotal).toEqual(20)
    })
  })

})
