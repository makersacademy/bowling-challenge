'use strict';

describe('frame', function () {
  var frame;

  describe('when a bowler throws two non-bonus bowls', function () {
  
    beforeEach(function () {
      frame = new Frame();
      frame.addBowlOneScore(7);
      frame.addBowlTwoScore(2);
    });

    it('calculates the first bowl score', function () {
      expect(frame.bowlOne).toEqual(7);
    });

    it('calculates the second bowl score', function () {
      expect(frame.bowlTwo).toEqual(2);
    });

    it('calculates the total of two bowls', function () {
      expect(frame.total()).toEqual(9);
    });
    
  });

  describe('when a bowler throws a 10', function () {

    beforeEach(function () {
      frame = new Frame();
    });

    it('knows if bowl one was a strike', function () {
      frame.addBowlOneScore(10);
      expect(frame.isAStrike()).toEqual(true);
    });

    it('knows if frame is was not a strike', function () {
      this.bowlOne = 5;
      expect(frame.isAStrike()).toEqual(false);
    });

    it('knows if bowl two was a spare', function () {
      frame.addBowlOneScore(6);
      frame.addBowlTwoScore(4);
      expect(frame.isASpare()).toEqual(true);
    });

    it('knows if frame was not a spare', function () {
      this.bowlOne = 6;
      this.bowlTwo = 3;
      expect(frame.isASpare()).toEqual(false);
    });

  });

});
