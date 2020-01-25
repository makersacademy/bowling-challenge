'use strict';

describe('The Game', function(){
  var game 

  describe('A game contains players',function(){
    beforeEach(function(){
      game = new Game
    })
    it('expects a player to be in the game',function(){
      expect(game.players).toEqual([])
    })
  })
})