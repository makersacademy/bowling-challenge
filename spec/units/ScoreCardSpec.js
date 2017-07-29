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
      spyOn(card, 'checkBonus');
    });
    it('checks if frame is full', function () {
      spyOn(card, 'wasFullFrame');
      spyOn(card, 'getPreviousFrame').and.returnValue([1]);
      card.updateCard(1);
      expect(card.wasFullFrame).toHaveBeenCalled();
    });
    it('pushes score to last frame if frame is not full', function () {
      spyOn(card, 'wasFullFrame').and.returnValue(false);
      spyOn(card, 'getPreviousFrame').and.returnValue([2]);
      card.updateCard(2);
      expect(card.getPreviousFrame).toHaveBeenCalledWith(1);
    });
    it('pushes new frame to card if last frame is full', function () {
      spyOn(card, 'wasFullFrame').and.returnValue(true);
      spyOn(card, 'getCard').and.returnValue([[1, 1]]);
      card.updateCard(2);
      expect(card.getCard).toHaveBeenCalled();
    });
    it('calls checkBonus if frame full', function () {
      spyOn(card, 'wasFullFrame').and.returnValue(true);
      spyOn(card, 'getCard').and.returnValue([[1, 1]]);
      card.updateCard(2);
      expect(card.checkBonus).toHaveBeenCalled();
    });
    it('calls checkBonus if frame not full', function () {
      spyOn(card, 'wasFullFrame').and.returnValue(false);
      spyOn(card, 'getCard').and.returnValue([[1]]);
      card.updateCard(2);
      expect(card.checkBonus).toHaveBeenCalled();
    });
  });

  describe('wasFullFrame', function () {
    it('returns true if 2 items in last array of card', function () {
      spyOn(card, 'getPreviousFrame').and.returnValue([1, 3]);
      expect(card.wasFullFrame()).toBe(true);
      expect(card.getPreviousFrame).toHaveBeenCalled();
    });
  });

  describe('checkBonus', function () {
    beforeEach(function () {
      spyOn(card, 'getPreviousFrame').and.returnValue([]);
    });
    it('gets last frame when it was a strike to update with first roll', function () {
      spyOn(card, 'wasStrikeFrame').and.returnValue(false);
      spyOn(card, 'wasSpareFrame').and.returnValue(true);
      card.checkBonus(true, 2);
      expect(card.getPreviousFrame).toHaveBeenCalledWith(1);
    });
    it('gets last frame when it was a spare to update with first roll', function () {
      spyOn(card, 'wasStrikeFrame').and.returnValue(true);
      spyOn(card, 'wasSpareFrame').and.returnValue(false);
      card.checkBonus(true, 2);
      expect(card.getPreviousFrame).toHaveBeenCalledWith(1);
    });
    it('gets second last frame when it was a strike to update with second roll', function () {
      spyOn(card, 'wasStrikeFrame').and.returnValue(true);
      spyOn(card, 'wasSpareFrame').and.returnValue(false);
      spyOn(card, 'isFirstFrame').and.returnValue(false);
      card.checkBonus(false, 4);
      expect(card.getPreviousFrame).toHaveBeenCalledWith(2);
    });
    it('does not do anything if first roll was strike', function () {
      spyOn(card, 'wasStrikeFrame').and.returnValue(true);
      spyOn(card, 'wasSpareFrame').and.returnValue(false);
      spyOn(card, 'isFirstFrame').and.returnValue(true);
      card.checkBonus(false, 0);
      expect(card.getPreviousFrame).not.toHaveBeenCalled();
    });
    it('gets last frame when it was a strike to update with first roll', function () {
      spyOn(card, 'wasStrikeFrame').and.returnValue(true);
      spyOn(card, 'wasSpareFrame').and.returnValue(false);
      spyOn(card, 'isFirstFrame').and.returnValue(false);
      card.checkBonus(true, 2);
      expect(card.getPreviousFrame).toHaveBeenCalledWith(1);
    });
    it('calls wasStrikeFrame to check last frame', function () {
      spyOn(card, 'wasStrikeFrame').and.returnValue(false);
      spyOn(card, 'wasSpareFrame').and.returnValue(false);
      card.checkBonus(true, 3);
      expect(card.wasStrikeFrame).toHaveBeenCalledWith(1);
    });
    it('calls wasStrikeFrame to check last frame', function () {
      spyOn(card, 'wasStrikeFrame');
      spyOn(card, 'isFirstFrame').and.returnValue(false);
      card.checkBonus(false, 3);
      expect(card.wasStrikeFrame).toHaveBeenCalledWith(2);
    });
    it('calls wasSpareFrame to check last frame', function () {
      spyOn(card, 'wasSpareFrame');
      card.checkBonus(true, 3);
      expect(card.wasSpareFrame).toHaveBeenCalled();
    });
  });

  describe('wasSpareFrame', function () {
    it('returns true if frame total is 10', function () {
      spyOn(card, 'wasStrikeFrame').and.returnValue(false);
      spyOn(card, 'sumLastFrame').and.returnValue(10);
      expect(card.wasSpareFrame()).toEqual(true);
    });
    it('returns false if frame total not equal to 10', function () {
      spyOn(card, 'wasStrikeFrame').and.returnValue(false);
      spyOn(card, 'sumLastFrame').and.returnValue(9);
      expect(card.wasSpareFrame()).toEqual(false);
    });
    it('calls sumLastFrame to check frame score', function () {
      spyOn(card, 'wasStrikeFrame').and.returnValue(false);
      spyOn(card, 'sumLastFrame');
      card.wasSpareFrame();
      expect(card.sumLastFrame).toHaveBeenCalled();
    });
    it('calls sumLastFrame to check frame score', function () {
      spyOn(card, 'wasStrikeFrame').and.returnValue(false);
      spyOn(card, 'sumLastFrame');
      card.wasSpareFrame();
      expect(card.sumLastFrame).toHaveBeenCalled();
    });
  });

  describe('wasStrikeFrame', function () {
    it('returns true if frame total is 10', function () {
      spyOn(card, 'getPreviousFrame').and.returnValue([10, 0]);
      expect(card.wasStrikeFrame(1)).toEqual(true);
    });
    it('returns false if first roll not equal to 10', function () {
      spyOn(card, 'getPreviousFrame').and.returnValue([9, 1]);
      expect(card.wasStrikeFrame(1)).toEqual(false);
    });
  });

  describe('sumLastFrame', function () {
    it('returns total from last frame when strike', function () {
      spyOn(card, 'getPreviousFrame').and.returnValue([10, 0]);
      expect(card.sumLastFrame()).toEqual(10);
    });
    it('returns total from last frame when normal', function () {
      spyOn(card, 'getPreviousFrame').and.returnValue([3, 3]);
      expect(card.sumLastFrame()).toEqual(6);
    });
    it('returns total from last frame when nothing in scorecard', function () {
      spyOn(card, 'getPreviousFrame').and.returnValue([]);
      expect(card.sumLastFrame()).toEqual(0);
    });
  });

  describe('getPreviousFrame', function () {
    it('returns array of last frame', function () {
      spyOn(card, 'getCard').and.returnValue([[1, 2], [10, 0]]);
      expect(card.getPreviousFrame(1)).toEqual([10, 0]);
    });
    it('returns array from 2 frames back', function () {
      spyOn(card, 'getCard').and.returnValue([[1, 2], [10, 0]]);
      expect(card.getPreviousFrame(2)).toEqual([1, 2]);
    });
    it('can handle empty array on first call with 2', function () {
      spyOn(card, 'getCard').and.returnValue([[]]);
      expect(card.getPreviousFrame(2)).toEqual([]);
    });
    it('can handle empty array on first call with 1', function () {
      spyOn(card, 'getCard').and.returnValue([[]]);
      expect(card.getPreviousFrame(1)).toEqual([]);
    });
  });
});
