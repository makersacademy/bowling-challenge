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
      card.card = [[]];
    });
    it('checks if frame is full', function () {
      card.updateCard(1);
      expect(card.isFullFrame).toHaveBeenCalled();
    });
    it('updates complete frame with new rollScore', function () {
      spyOn(card, 'getPreviousFrame');
      card.getPreviousFrame.and.returnValue([1]);
      card.isFullFrame.and.returnValue(false);
      card.updateCard(2);
      expect(card.getPreviousFrame).toHaveBeenCalled();
      expect(card.getPreviousFrame(1)).toEqual([1, 2]);
    });
    it('pushes new frame if last frame has 2 objects', function () {
      card.isFullFrame.and.returnValue(true);
      card.updateCard(2);
      expect(card.card).toEqual([[], [2]]);
    });
    it('calls add bonus', function () {
      spyOn(card, 'checkBonus');
      card.updateCard(2);
      expect(card.checkBonus).toHaveBeenCalled();
    });
  });

  describe('isFullFrame', function () {
    it('returns true if 2 items in last array of card', function () {
      spyOn(card, 'getPreviousFrame').and.returnValue([1, 3]);
      expect(card.isFullFrame()).toBe(true);
      expect(card.getPreviousFrame).toHaveBeenCalled();
    });
  });

  describe('wasSpareFrame', function () {
    it('returns true if frame total is 10', function () {
      card.card = [[1, 1], [5, 5]];
      expect(card.wasSpareFrame()).toEqual(true);
    });
    it('returns false if frame total not equal to 10', function () {
      card.card = [[1, 1], [5, 4]];
      expect(card.wasSpareFrame()).toEqual(false);
    });
  });

  describe('wasStrikeFrame', function () {
    it('returns true if frame total is 10', function () {
      card.card = [[1, 1], [10, 0]];
      expect(card.wasStrikeFrame()).toEqual(true);
    });
    it('returns false if first roll not equal to 10', function () {
      card.card = [[1, 1], [9, 1]];
      expect(card.wasStrikeFrame()).toEqual(false);
    });
  });

  describe('sumLastFrame', function () {
    it('returns total from last frame when strike', function () {
      card.card = [[1, 1], [10, 0]];
      expect(card.sumLastFrame()).toEqual(10);
    });
    it('returns total from last frame when normal', function () {
      card.card = [[1, 1], [1, 5]];
      expect(card.sumLastFrame()).toEqual(6);
    });
  });

  describe('getPreviousFrame', function () {
    it('returns array of last frame', function () {
      card.card = [[1, 1], [2, 5]];
      expect(card.getPreviousFrame(1)).toEqual([2, 5]);
    });
    it('returns array from 2 frames back', function () {
      card.card = [[1, 1], [1, 5]];
      expect(card.getPreviousFrame(2)).toEqual([1, 1]);
    });
  });

  describe('checkBonus', function () {
    beforeEach(function () {
    });
    it('calculates spare bonus and adds to last frame', function () {
      card.card = [[1, 1], [9, 1], [1, 2]];
      expect(card.updateCard(2)).toBeTrue;
    });
    it('returns false if first roll not equal to 10', function () {
      card.card = [[1, 1], [9, 1]];
      expect(card.wasStrikeFrame()).toBeFalse;
    });
  });
});
