'use strict'; 

describe('Player', function(){
  var player 

  beforeEach(function(){
    player = new Player 
  })

  describe('currentScore',function(){
    it('Has a starting score of zero', function(){
      expect(player.currentScore()).toEqual(0)
    })
  })

  describe('bowledOver', function(){
    it('adds the downed pins to the scorecard', function(){
      player.bowledOver(6)
      expect(player._scorecard).toContain(6)
    })
  })
})