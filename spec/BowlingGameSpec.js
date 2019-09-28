'use strict';

describe(' Bowling Game', function (){
  var game

  beforeEach(function (){
    game = new BowlingGame();
  });

  describe(".roll", function() {
    it("records a roll", function() {
      game.roll(8);
      expect(game.score).toEqual(8);
      expect(game.rolls).toEqual([8]);
      expect(game.pinsPerFrame).toEqual([8]);
    });

    it("records two throws appropriatley", function() {
      game.roll(4);
      game.roll(4);
      expect(game.score).toEqual(8);
      expect(game.rolls).toEqual([4, 4]);
      expect(game.pinsPerFrame).toEqual([8]);
    });

    it("records the change of frame", function() {
      game.roll(4);
      game.roll(4);
      game.roll(4);
      expect(game.currentFrame).toEqual(2);
      expect(game.score).toEqual(12);
      expect(game.rolls).toEqual([4, 4, 4]);
      expect(game.pinsPerFrame).toEqual([8, 4]);
    });
  });
});
