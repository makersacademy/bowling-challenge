'use strict';

describe('Game', function(){
  var game


  beforeEach(function(){
    game = new Game();
  });

  describe('storeFrame', function() {

    it('stores complete frames in an array', function() {
      game.storeFrame([1,5])
      expect(game.viewFrames()).toContain([1,5]);
    });
  });
});
