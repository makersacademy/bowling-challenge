"use strict";

describe('LastFrame', function() {
  var frame10;

  beforeEach(function() {
    frame10 = new LastFrame();
  });

  describe('#AddRolls', function() {
    it('adds your score to the roll1', function() {
      frame10.AddRolls(10);
      frame10.AddRolls(4);
      frame10.AddRolls(3);
      expect(frame10.frame_Score()).toEqual(17);
    })
  });

  describe('#isFinished', function() {
    it('tells us the last frame is finished', function() {
      frame10.AddRolls(10);
      frame10.AddRolls(4);
      frame10.AddRolls(3);
      expect(frame10.isFinished()).toEqual(true);
    })
  })
});
