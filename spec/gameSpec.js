'use strict'

describe ('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game;
  });

  describe('#randRoll', function(){
    it('a random roll generates a number between 1 - 10', function(){
      expect(game.randRoll()).toBeLessThan(11);
    });
  });

})
