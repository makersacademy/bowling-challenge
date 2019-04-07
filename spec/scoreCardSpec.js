'use strict';

describe("ScoreCard", function () {
  var game;
  var card;
  var frame;

  beforeEach(function() {
    frame = new Frame();
    game = new BowlingGame(frame);
    card = new ScoreCard;
  });
  
  describe('pinRoll', function () {

    it("records a pin roll of the frame", function () {
      card.pinRoll(frame.roll(10))
      expect(card.pinsRolled).toEqual([10]);
    });

    it("records multiple pin rolls of the frame", function () {
      card.pinRoll(frame.roll(5))
      card.pinRoll(frame.roll(10))
      expect(card.pinsRolled).toEqual([5,10]);
    });

    it("player plays a Gutter Game - player rolls over 0 pins - score card records pins rolled", function () {
      card.pinRoll(frame.roll(0))
      card.pinRoll(frame.roll(0))
      card.pinRoll(frame.roll(0))
      card.pinRoll(frame.roll(0))
      card.pinRoll(frame.roll(0))
      card.pinRoll(frame.roll(0))
      card.pinRoll(frame.roll(0))
      card.pinRoll(frame.roll(0))
      card.pinRoll(frame.roll(0))
      card.pinRoll(frame.roll(0))
      expect(card.pinsRolled).toEqual([0,0,0,0,0,0,0,0,0,0]);
    });

  });

});