'use strict';

describe('Game', function(){
  var game


  beforeEach(function(){
    game = new Game();
  });

  describe('frame', function() {

    it('stores the number of pins knocked down', function() {
      game.throw(7);
      expect(game._frame).toEqual([7]);
    });
  });

  describe('storeFrame', function() {

    it('stores individual frames in an array', function() {
      game.storeFrame([1, 5]);
      game.storeFrame([3, 6]);
      console.log(game._frames)
      expect(game._frames).toEqual([[1,5],[3,6]]);
    });
  });
});
