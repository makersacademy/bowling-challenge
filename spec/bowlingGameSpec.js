'use strict';

describe("BowlingGame", function () {
  var game;
  var player;

  beforeEach(function() {
    player = new Player();
    game = new BowlingGame(player);
  });
  
  describe('frame', function () {
    it("goes to the next frame if the player rolls a strike on first roll", function () {
      spyOn(player,'roll').and.returnValue(10);
      game.frame(player.roll(10));
      expect(game.frameNumber).toEqual(2);
    });

    it("stays on the same frame if the player rolls > 0 and < 10 pins", function () {
      spyOn(player,'roll').and.returnValue(5);
      game.frame(player.roll(5));
      expect(game.frameNumber).toEqual(1);
    });

    it("stops at the 10th frame", function () {
      spyOn(player,'roll').and.returnValue(10);
      game.frameNumber += 9;
      game.frame(player.roll(10));
      expect(game.frameNumber).toEqual(10);
    });

  });

});