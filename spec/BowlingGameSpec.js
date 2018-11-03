'use strict';

describe('BowlingGame', function(){
  var bowlinggame;
  var player;

  beforeEach(function(){
    player = jasmine.createSpyObj('player', ['getName']);
    player.getName.and.callFake(function() {return "John"; });
    bowlinggame = new BowlingGame(player);
  });

  describe('getPlayer', function(){
    it('returns the player', function(){
      expect(bowlinggame.getPlayer()).toEqual(player);
    });
  });
  
});
