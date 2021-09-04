'use strict';

describe('Frame', function () {
  let frame;

  beforeEach(function () {
    frame = new Frame();
  });

  describe('any new instances of thermostat class have empty rolls array', function () {
    it('rolls array is empty for frame instance', function () {
      expect(frame.rolls).toEqual([]);
    });
  });

  describe('adds score after a bowl', function () {
    it('adds score into rolls array', function () {
      frame.addRoll(5);
      expect(frame.rolls.length).toEqual(1);
    });
  });

  describe('adds bonus score to bonus score variable', function () {
    it('correctly updates bonus score', function () {
      frame.addBonusScore(5);
      expect(frame.bonus_score).toEqual(5);
    });
  });



  describe('calculates the score for the frame', function () {
    it('returns correct score for frame', function () {

    });
  });

  

  







})
