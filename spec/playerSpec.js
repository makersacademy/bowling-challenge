'use strict';

describe('Player', function() {
  var player = new Player;

  describe('initialise', function () {
    it('player score starts at zero', function() {
      expect(player.score).toEqual(0)
    });
  });

});
