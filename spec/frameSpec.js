console.log('frameSpec file has been required correctly')

'use strict';

describe('Frame', function (){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  })

  describe('Should be initialized', function () {
    it('with empty array score', function (){
      expect(frame.bowled).toEqual([]);
    });

    it('with times bowled equal to zero', function () {
      expect(frame.timesBowled).toEqual(0);
    });

    it('with 10 pins', function () {
      expect(frame.pins).toEqual(10);
    });
  });

  describe('Bowling a frame', function () {
    it('returns total frame score', function () {
      // spyOn(frame, 'bowled').and.returnValue([3, 5]);
      // need help understanding spies
      frame.bowled = [3, 5];
      expect(frame.frameScore()).toEqual(8);
    });

    it('returns true if its a players first bowl', function () {
      expect(frame.isFirstBowl()).toEqual(true);
    });

    it('returns false if its NOT a players first bowl', function () {
      frame.incrementBowl();
      expect(frame.isFirstBowl()).toEqual(false);
    });

    it('increments bowl by 1', function () {
      frame.incrementBowl();
      expect(frame.timesBowled).toEqual(1);
    });

    it('returns true if player can bowl i.e. not already bowled twice', function () {
      frame.bowl(7);
      expect(frame.canBowl()).toBe(true);
    });

    it('a player cannot bowl if already bowled twice', function () {
      frame.bowl(7);
      frame.bowl(2);
      expect(frame.canBowl()).toBe(false);
    });
  });

    describe('Scoring', function () {
      it('adds to score', function (){
        frame.addToScore(8)
        expect(frame.bowled).toEqual([8]);
      });

      it('is a strike', function () {
        // spyOn(frame, 'bowl').and.returnValue(0);
        frame.bowl(10);
        expect(frame.isStrike()).toEqual(true);
      });

      it('is a spare', function () {
        // spyOn(frame, 'bowl').and.returnValue(0);
        frame.bowl(1);
        frame.bowl(9);
        expect(frame.isSpare()).toEqual(true);
      });
    })

});
