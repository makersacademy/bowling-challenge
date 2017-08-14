'use strict';

describe ('Player', function() {
  var player;

  beforeEach(function() {
    player = new Player('Nutbrown');
  });

  describe('constructor', function() {
    it('has a name', function() {
      expect(player.getName()).toEqual('Nutbrown');
    });
  });
});
