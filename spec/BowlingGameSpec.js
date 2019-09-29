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

    it("records a strike and moves to the next frame", function() {
      game.roll(10);
      game.roll(1);
      game.roll(1);
      expect(game.currentFrame).toEqual(3)
      expect(game.rolls).toEqual([10, 1, 1]);
    });

    it("records the correct score for a strike", function() {
      game.roll(10);
      game.roll(1);
      game.roll(2);
      expect(game.score).toEqual(16);
      expect(game.pinsPerFrame).toEqual([13, 3]);
    });

    it("records the correct score for two consecutive strikes", function() {
      game.roll(10);
      game.roll(10);
      game.roll(1);
      game.roll(2);
      expect(game.score).toEqual(37);
      expect(game.pinsPerFrame).toEqual([21, 13, 3]);
    });

    it("records the correct score for three consecutive strikes", function() {
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(1);
      game.roll(2);
      expect(game.score).toEqual(67);
      expect(game.pinsPerFrame).toEqual([30, 21, 13, 3]);
    });

  });
});
