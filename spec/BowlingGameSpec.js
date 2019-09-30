'use strict';

describe(' Bowling Game', function (){
  var game

  beforeEach(function (){
    game = new BowlingGame();
  });

  var rollLoop = function (rolls, pins) {
    for (var i = 0; i < rolls; i++) {
      game.roll(pins);
    }
  };

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
      game.roll(0);
      game.roll(0);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(1);
      game.roll(2);
      expect(game.score).toEqual(67);
      expect(game.pinsPerFrame).toEqual([0, 30, 21, 13, 3]);
    });

    it("records a spare bonus", function() {
     game.roll(0);
     game.roll(10);
     game.roll(1);
     expect(game.score).toEqual(12)
     expect(game.rolls).toEqual([0, 10, 1]);
     expect(game.pinsPerFrame).toEqual([11, 1]);
   });

   it("records a multiple spare bonuses", function() {
    game.roll(5);
    game.roll(5);
    game.roll(1);
    game.roll(1);
    game.roll(4);
    game.roll(6);
    game.roll(2);
    game.roll(0);
    expect(game.score).toEqual(27)
    expect(game.rolls).toEqual([5, 5, 1, 1, 4, 6, 2, 0]);
    expect(game.pinsPerFrame).toEqual([11, 2, 12, 2]);
  });

  it("records a tenth frame", function() {
   rollLoop(9, 10);
   game.roll(1);
   expect(game.currentFrame).toEqual(10);
 });

 it("scores the perfect game", function() {
  rollLoop(12, 10);
  expect(game.score).toEqual(300);
  expect(game.pinsPerFrame).toEqual([30, 30, 30, 30, 30, 30, 30, 30, 30, 30]);
});
  });
});
