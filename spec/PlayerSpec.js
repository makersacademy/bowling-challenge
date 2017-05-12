'use strict';

describe('Player', function() {

  var player;

  beforeEach(function() {
      player = new Player('AJ');
  });

  describe('initialize', function() {
    it('is created with a player name', function() {
        expect(player.name).toEqual('AJ');
    });

    it('has an initial score of 0', function() {
        expect(player.score).toEqual(0);
    });
  });
});
