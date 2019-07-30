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

    })
  })

})
