'use strict';

describe('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('to start', function(){
    it('has empty frames array', function(){
      expect(game.frames).toEqual([]);
    });
    it('has 0 score', function(){
      expect(game.score).toEqual(0);
    });
  })

});
