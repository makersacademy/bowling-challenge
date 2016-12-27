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




  it("calculates the score of the frame", function() {
    frame.addToFrame(1);
    frame.addToFrame(2);
    expect(frame._getScore()).toEqual(3);
  })

  it("knows if frame is a spare", function() {
    frame.addToFrame(5);
    frame.addToFrame(5);
    expect(frame.isSpare()).toEqual(true);
  })

  it("knows if frame is a spare", function() {
    frame.addToFrame(10);
    expect(frame.isStrike()).toEqual(true);
    expect(frame.isSpare()).toEqual(false)
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

  it("calculates the total score plus its bonus", function() {
    frame.addToFrame(5);
    frame.addToFrame(5);
    frame.addToBonus(2);
    expect(frame.getTotalScore()).toEqual(12);
  })

  it('knows when a frames points are complete', function() {
    frame.addToFrame(5);
    frame.addToFrame(5);
    expect(frame.isPointsComplete()).toEqual(false);
  })



})
