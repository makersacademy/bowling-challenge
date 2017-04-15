'use strict';

describe('Player', function(){
  var player;
  var testName = 'Rick'
  beforeEach(function(){
    player = new Player(testName);
  });

  describe('initialization', function(){
    it('Player has a name', function(){
      expect(player.name).toEqual(testName)
    });
  });


});
