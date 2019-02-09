'use strict';

describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

    it('starts from zero score in a new game', function(){
      expect(game.getCurrentScore()).toEqual(0);
    });

});
