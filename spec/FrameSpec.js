/*jslint node: true */
'use strict';

describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe("#addToFrame", function() {
    it("should add points to the scorecard", function() {
      frame.addToFrame(1);
      frame.addToFrame(2);
      expect(frame.scoreCard).toEqual([1,2]);
    })

    it("has a bonus if frame is a spare", function() {
      frame.addToFrame(5);
      frame.addToFrame(5);
      expect(frame.bonus).toEqual(new Bonus("spare"));
    })

    it("has a bonus if frame is a strike", function() {
      frame.addToFrame(10);
      expect(frame.bonus).toEqual(new Bonus("strike"));
    })

    it("has a no bonus if frame is not a spare or strike", function() {
      frame.addToFrame(1);
      frame.addToFrame(1);
      expect(frame.bonus).toEqual(null);
    })
  })

  describe("#isOver", function() {
    it("knows when a frame is not over", function() {
      expect(frame.isOver()).toEqual(false);
    })

    it("knows when a frame is over", function() {
      frame.addToFrame(0);
      frame.addToFrame(0);
      expect(frame.isOver()).toEqual(true);
    })

    it("knows when a frame is over following a strike", function() {
      frame.addToFrame(10);
      expect(frame.isOver()).toEqual(true);
    })
  })

  describe("#isSpare/Strike", function() {
    it("knows if frame is a spare", function() {
      frame.addToFrame(5);
      frame.addToFrame(5);
      expect(frame.isSpare()).toEqual(true);
    })

    it("knows if frame is a strike", function() {
      frame.addToFrame(10);
      expect(frame.isStrike()).toEqual(true);
      expect(frame.isSpare()).toEqual(false)
    })
  })

  describe("#getTotalScore", function() {
    it("calculates the total score plus its bonus", function() {
      frame.addToFrame(5);
      frame.addToFrame(5);
      frame.addToBonus(2);
      expect(frame.getTotalScore()).toEqual(12);
    })
  })

  describe("#isPointsComplete", function() {
    it('knows when a frames points are complete', function() {
      frame.addToFrame(5);
      frame.addToFrame(5);
      expect(frame.isPointsComplete()).toEqual(false);
    })
  })

  describe("#addToBonus", function() {
    it('instructs its bonus to add points if there is a bonus', function() {
      var bonusMock = { addToBonus: null }
      spyOn(bonusMock,"addToBonus")
      frame.bonus = bonusMock
      frame.addToBonus(1);
      expect(bonusMock.addToBonus).toHaveBeenCalledWith(1);
    })

    it('does nothing if there is no bonus', function() {
      var bonusMock = { addToBonus: null }
      spyOn(bonusMock,"addToBonus")
      frame.addToBonus(1);
      expect(bonusMock.addToBonus).not.toHaveBeenCalled();
    })
  })

  describe("#isPointsComplete", function() {
    it('knows frame has all points when bonus is completed', function() {
      var bonusMock = jasmine.createSpyObj("bonus", ["isOver"]);
      bonusMock.isOver.and.returnValue(true)
      frame.bonus = bonusMock
      expect(frame.isPointsComplete()).toEqual(true)
    })

    it('knows when a frame without a bonus is complete', function() {
      frame.addToFrame(0);
      frame.addToFrame(0);
      expect(frame.isPointsComplete()).toEqual(true)
    })
  })

  describe("#rollNumber", function() {
    it('returns the current roll number of the frame', function() {
      frame.addToFrame(1);
      expect(frame.rollNumber()).toEqual(2);
    })
  })

  describe("#getBonusPoints", function() {
    it('gets the bonus points', function() {
      var scoreCard = [1,2]
      var bonusMock = { scoreCard: scoreCard }
      frame.bonus = bonusMock
      expect(frame.getBonusPoints(0)).toEqual(1);
      expect(frame.getBonusPoints(1)).toEqual(2);
    })
  })
})
