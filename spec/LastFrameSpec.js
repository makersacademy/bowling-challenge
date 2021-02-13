"use strict";

describe('LastFrame', function() {
  var frame10;

  beforeEach(function() {
    frame10 = new LastFrame();
  });

  describe('#AddRolls', function() {
    it('when you have a strike', function() {
      frame10.AddRolls(10);
      frame10.AddRolls(4);
      frame10.AddRolls(3);
      expect(frame10.frame_Score()).toEqual(17);
    })
    it('when you have a spare', function() {
      frame10.AddRolls(6);
      frame10.AddRolls(4);
      frame10.AddRolls(3);
      expect(frame10.frame_Score()).toEqual(13);
    })

    it('when you have neither', function() {
      frame10.AddRolls(6);
      frame10.AddRolls(3);
      expect(frame10.frame_Score()).toEqual(9);
    })
  });

  describe('#isFinished', function() {
    it('tells us the last frame is finished', function() {
      frame10.AddRolls(10);
      frame10.AddRolls(4);
      frame10.AddRolls(3);
      expect(frame10.isFinished()).toBe(true);
    })

    it('tells us the last frame is finished', function() {
      frame10.AddRolls(3);
      frame10.AddRolls(4);
      expect(frame10.isFinished()).toBe(true);
    })

    it('tells us the last frame is NOT finished', function() {
      frame10.AddRolls(5);
      frame10.AddRolls(5);
      expect(frame10.isFinished()).toBe(false);
    })
    it('tells us the last frame is NOT finished', function() {
      frame10.AddRolls(10);
      frame10.AddRolls(5);
      expect(frame10.isFinished()).toBe(false);
    })
  })
});
