'use strict';

describe('Game', function() {
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('Returns correct score', function() {
    it('Not complete initially', function() {
      expect(game.isComplete()).toEqual(false);
    });

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
  });
});
