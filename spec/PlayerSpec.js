'use strict';

describe('player', function(){
  var player;

  beforeEach(function(){
    player = new Player();
  })

  describe('#initialize', function() {
    it ('player initializes with roll = 0', function(){
      expect(player.roll).toEqual(0);
    })
  })



})
