'use strict'; 

describe('Player', function(){
  var player 

  beforeEach(function(){
    player = new Player 
  })

  describe('Score',function(){
    it('Has a starting score of zero', function(){
      expect(player.currentScore()).toEqual(0)
    })
  })

  describe('bowledOver', function(){
    it('Lets the player put in how many pins they knocked over',function(){
      expect(player.bowledOver(5)).toEqual(5)
    })
  })
})