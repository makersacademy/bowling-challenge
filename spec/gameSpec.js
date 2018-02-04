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

    it('stores complete frames in an array', function() {
      spyOn(frameOver()).andReturn(true)
      game.storeFrame([1, 5]);
      game.storeFrame([3, 6]);
      expect(game._frames).toEqual([[1,5],[3,6]]);
    });
  });
  describe('checkPinSum', function() {
    it('disallows a pin total over ten', function() {
      game.throw(5);
      game.throw(8);
      expect(game.checkPinSum).toThrowError ("There are not that many pins remaining!");
    });
  });
});
