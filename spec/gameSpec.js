'use strict';

describe('The Game', function(){
  var game 
  var player

  beforeEach(function(){
    game = new Game
    player = new Player
  })

  describe('A game contains players',function(){
    it('expects a player to not be in the game at start',function(){
      expect(game.players()).toEqual([])
    })
  })

  describe('addPlayer', function(){
    it('adds a player to the array', function(){
      game.addPlayer(player)
      expect(game.players()).toContain(player)
    })
  })
})