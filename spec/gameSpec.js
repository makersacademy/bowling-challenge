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
      console.log(game)
      expect(game.totalScore).toEqual(8)
      expect(game.throws).toEqual([4,4])
      expect(game.throwsRemaining).toEqual(18)
      expect(game.index).toEqual(2)
      expect(game.frameRunningTotals).toEqual([8])

    })
  })

})
