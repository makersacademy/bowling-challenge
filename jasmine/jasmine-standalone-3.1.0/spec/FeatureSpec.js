'use strict';

describe("Feature Test: ", function() {
  var game;
  var calc;

  beforeEach(function(){
    game = new Game();
    calc = new CalculateScore();
  });

  describe('Users can score points', function() {
    it('A User can roll and score points', function() {
      game.roll(1);
      game.roll(4);
      expect(game.score()).toEqual(5);
    });
  });
});
