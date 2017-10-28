'use strict';

describe('Game', function () {

  var game;

  beforeEach(function () {
    game = new Game();
  })
  
  describe('frame', function () {
    
    it('starts on the first frame', function () {
      expect(game.currentFrame()).toEqual(1);    
    });
    it('moves onto next frame when complete', function () {
      game.roll(7);
      game.roll(3);
      expect(game.currentFrame()).toEqual(2);
    });

  })

  describe('pinsRemaining', function () {
    
    it('has a default of 10 pins remaining to knock down', function () {
      expect(game.pinsRemaining()).toEqual(10);
    });
  
  });

  describe('roll', function () {
    
    it('knocks down some pins', function () {
      game.roll(7);
      expect(game.pinsRemaining()).toEqual(3);
    });

  });




});
