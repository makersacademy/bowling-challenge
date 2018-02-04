'use strict';

describe('Game', function(){
  var game


  beforeEach(function(){
    game = new Game();
  });

  describe('frame', function() {
    it('stores the number of pins knocked down for one throw ', function() {
      game.throw(5)
      game.throw(7)
      expect(game.frame).toEqual[5,7]
    });
  });
});
