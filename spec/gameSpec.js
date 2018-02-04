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
      game.throw(1)
      game.throw(5)
      game.throw(3)
      game.throw(6)
      expect(game._frames).toEqual([[1,5],[3,6]]);
    });
  });

  describe('checkPinSum', function() {

    it('disallows a throw over ten', function() {
    expect(function() { game.checkPinSumValid(11) }).toThrow("You must enter a throw of ten or less");
    });

  //   it('disallows a pin total over ten', function() {
  //     game.throw(5);
  //     game.throw(8);
  //     expect(function() { game.checkPinSumValid() }).toThrow("There are not that many pins remaining!");
  //   });


  });
});
