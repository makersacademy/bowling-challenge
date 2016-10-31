'use strict';

describe('Game:', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('it tracks frames', function(){
    it('starts with 0 frames', function(){
      expect(game.frames.length).toEqual(0);
    });
  });
  describe('it calculates the score', function(){
    it('initializes at 0', function(){
      expect(game.score).toEqual(0);
    });
  });

});
