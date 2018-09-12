"use strict";

describe('ScoreCalculator', function() {
  var scoreCalculator, frame1, frame2;

  beforeEach(function() {
    scoreCalculator = new ScoreCalculator();
    frame1 = new Frame();
    frame2 = new Frame();
  })

  describe('Given no bonus scores', function() {
    beforeEach(function() {
      frame1.addPins(3);
      frame1.addPins(3);
      frame2.addPins(3);
      frame2.addPins(3);
    });

    it('Returns the correct total score if no bonus points', function() {
      expect(scoreCalculator.score([frame1, frame2]).total).toEqual(12);
    });

    it('Returns an array of total scores per frame', function() {
      expect(scoreCalculator.score([frame1, frame2]).frameScores).toEqual([6, 6, 0, 0, 0, 0, 0, 0, 0, 0]);
    });

  });

  describe('Bonus points - Strike', function() {
    beforeEach(function() {
      frame1.addPins(10);
      frame2.addPins(10);
    });

    it('Adds correct score after a strike', function() {
      expect(scoreCalculator.score([frame1, frame2]).total).toEqual(30);
    })

    it('Returns an array of total scores per frame', function() {
      expect(scoreCalculator.score([frame1, frame2]).frameScores).toEqual([20, 10, 0, 0, 0, 0, 0, 0, 0, 0]);
    });

    it('Returns correct score after 10 strikes', function() {
      expect(scoreCalculator.score([frame1, frame1, frame1, frame1, frame1, frame1, frame1, frame1, frame1, frame1]).total).toEqual(270)
    });
  });

  describe('Bonus points - Spare', function() {
    beforeEach(function() {
      frame1.addPins(5);
      frame1.addPins(5);
      frame2.addPins(3);
      frame2.addPins(5);
    });

    it('Adds correct score after a spare', function() {
      expect(scoreCalculator.score([frame1, frame2]).total).toEqual(21);
    });

    it('Returns an array of total scores per frame', function() {
      expect(scoreCalculator.score([frame1, frame2]).frameScores).toEqual([13, 8, 0, 0, 0, 0, 0, 0, 0, 0]);
    });
  });
});
