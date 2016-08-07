'use strict';

describe('Game', function(){

  describe('roll', function(){

    it('returns a random amount of pins knocked down', function(){
      var game = new Game();

      spyOn(Math, 'random').and.returnValue(0.2);
      expect(game.roll()).toEqual(2);
    });

  });

  describe('frame', function(){
    var game = new Game();

    it('starts each frame with an empty array', function(){
      expect(game._currentFrame).toEqual([])
    });

  });



});
