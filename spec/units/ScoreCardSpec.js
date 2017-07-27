'use strict';

describe('ScoreCard', function () {
  var card;

  beforeEach(function () {
    card = new ScoreCard();
  });

  describe('getCard', function () {
    it('returns an array', function () {
      expect(card.getCard()).toEqual(jasmine.any(Array));
    });
    it('returns array of arrays stored in this.card', function () {
      card.card = [[1, 1], [5, 0]];
      expect(card.getCard()).toEqual([[1, 1], [5, 0]]);
    });
  });

  describe('updateCard', function () {
    beforeEach(function () {
      spyOn(card, 'isFullFrame');
    });
    it('checks if frame is full', function () {
      card.updateCard(1);
      expect(card.isFullFrame).toHaveBeenCalled();
    });
    it('updates complete frame with new rollScore', function () {
      spyOn(card, 'getLastFrame');
      card.getLastFrame.and.returnValue([1]);
      card.isFullFrame.and.returnValue(false);
      card.updateCard(2);
      expect(card.getLastFrame).toHaveBeenCalled();
      expect(card.getLastFrame()).toEqual([1, 2]);
    });
    it('pushes new frame if last frame has 2 objects', function () {
      spyOn(card, 'getLastFrame').and.callThrough();
      card.isFullFrame.and.returnValue(true);
      card.updateCard(2);
      expect(card.getLastFrame).not.toHaveBeenCalled();
      expect(card.getLastFrame()).toEqual([2]);
      expect(card.getCard()).toEqual([[], [2]]);
    });
  });

  describe('isFullFrame', function () {
    it('returns true if 2 items in last array of card', function () {
      spyOn(card, 'getLastFrame').and.returnValue([1, 3]);
      expect(card.isFullFrame()).toBe(true);
      expect(card.getLastFrame).toHaveBeenCalled();
    });
  });

  describe('getLastFrame', function () {
    it('returns last item in this.card as an array', function () {
      card.card = [[1, 1], [5, 0]];
      expect(card.getLastFrame()).toEqual([5, 0]);
    });
  });

  describe('isSpareFrame', function () {
    it('returns true if frame total is 10', function () {
      card.card = [[1, 1], [5, 5]];
      expect(card.isSpareFrame()).toBeTrue;
    });
    it('returns false if frame total not equal to 10', function () {
      card.card = [[1, 1], [5, 4]];
      expect(card.isSpareFrame()).toBeFalse;
    });
  });

  describe('isStrikeFrame', function () {
    it('returns true if frame total is 10', function () {
      card.card = [[1, 1], [10, 0]];
      expect(card.isStrikeFrame()).toBeTrue;
    });
    it('returns false if first roll not equal to 10', function () {
      card.card = [[1, 1], [9, 1]];
      expect(card.isStrikeFrame()).toBeFalse;
    });
  });
});
