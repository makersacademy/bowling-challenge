'use strict';

describe('Player', function(){
  var player;
  var playername = "John"

  beforeEach(function(){
    player = new Player(playername)
  });

  describe('getName', function(){
    it('returns the name', function(){
      expect(player.getName()).toEqual(playername);
    });
  });
});