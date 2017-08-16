'use strict';

describe('Game', function() {
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('Default state', function(){
    it('Not complete upon instantiation', function() {
      expect(game.isComplete()).toEqual(false);
    });
  });

  describe('Returns correct score', function() {
    it('Gutter game', function(){
      for(var i = 0; i <= 20; i++) {
        game.roll(0);
      };
      expect(game.isComplete()).toEqual(true);
      expect(game.getScore()).toEqual(0);
    });

    it('Perfect game', function() {
      for(var i = 0; i < 12; i++) {
        game.roll(10);
      };
      expect(game.isComplete()).toEqual(true);
      expect(game.getScore()).toEqual(300);
    });

    it('Given example score', function() {
      var rolls = [1,4,4,5,6,4,5,5,10,0,1,7,3,6,4,10,2,8,6];
      rolls.forEach(function(pins){
        game.roll(pins);
      }, this);
      expect(game.isComplete()).toEqual(true);
      expect(game.getScore()).toEqual(133);
    });
  });
});
