'use strict'; 

describe('Player', function(){
  var player 

  describe('Score',function(){
    beforeEach(function(){
      player = new Player 
    })
    it('Has a starting score of zero', function(){
      expect(player.currentScore()).toEqual(0)
    })
  })
})