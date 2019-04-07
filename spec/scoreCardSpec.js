'use strict';

describe("ScoreCard", function () {
  var game;
  var player;
  var card;

  beforeEach(function() {
    player = new Player();
    game = new BowlingGame(player);
    card = new ScoreCard;
  });
  
  describe('pinRoll', function () {

    it("records a pin roll of the player", function () {
      card.pinRoll(player.roll(10))
      expect(card.pinsRolled).toEqual([10]);
    });

    it("records multiple pin rolls of the player", function () {
      card.pinRoll(player.roll(5))
      card.pinRoll(player.roll(10))
      expect(card.pinsRolled).toEqual([5,10]);
    });
  });

});