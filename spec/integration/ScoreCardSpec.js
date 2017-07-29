'use strict';

describe('ScoreCardIntegration', function () {
  var card;

  beforeEach(function () {
    card = new ScoreCard();
  });

  describe('updateCard', function () {
    beforeEach(function () {
      card.card = [[]];
    });
    it('logs two new frames on card', function () {
      card.updateCard(1);
      card.updateCard(2);
      card.updateCard(3);
      expect(card.getCard()).toEqual([[1, 2], [3]]);
    });
    it('logs three new frames on card', function () {
      card.updateCard(1);
      card.updateCard(2);
      card.updateCard(3);
      card.updateCard(4);
      card.updateCard(5);
      expect(card.getCard()).toEqual([[1, 2], [3, 4], [5]]);
    });
    it('adds bonus to previous frame array on spare', function () {
      card.updateCard(1);
      card.updateCard(9);
      card.updateCard(3);
      expect(card.getCard()).toEqual([[1, 9, 3], [3]]);
    });
    it('does not add second roll as bonus to previous frame on spare', function () {
      card.updateCard(1);
      card.updateCard(9);
      card.updateCard(3);
      card.updateCard(5);
      expect(card.getCard()).toEqual([[1, 9, 3], [3, 5]]);
    });
    it('adds both bonus rolls to previous frame array on strike', function () {
      card.updateCard(1);
      card.updateCard(3);
      card.updateCard(10);
      card.updateCard(0);
      card.updateCard(2);
      card.updateCard(4);
      expect(card.getCard()).toEqual([[1, 3], [10, 0, 2, 4], [2, 4]]);
    });
    it('adds both bonus rolls to previous frame array on first frame strike', function () {
      card.updateCard(10);
      card.updateCard(0);
      card.updateCard(2);
      card.updateCard(4);
      expect(card.getCard()).toEqual([[10, 0, 2, 4], [2, 4]]);
    });
  });
});
