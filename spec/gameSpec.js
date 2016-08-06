'use strict';

describe('Game', function() {
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('initalise', function() {
    it('starts at the first frame', function(){
      expect(game.frame).toEqual(1);
    });
  });

});
