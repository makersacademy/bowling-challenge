'use strict';

describe('Frame', function(){

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

    it('each frame begins with 10 pins standing', function(){
      expect(frame.pinsStanding).toEqual(10);
    });

  describe('play frame', function() {
    beforeEach(function(){
      spyOn(Math, 'floor').and.returnValue(4);
    });

    it('records pins knocked down after first bowl', function(){
      frame.firstBowl();
      expect(frame.pinsDownFirst).toEqual(4);
    });

    it('records pins knocked down after second bowl', function(){
      frame.firstBowl();
      frame.secondBowl();
      expect(frame.pinsDownSecond).toEqual(4);
    });

    it('returns frame result as an array', function() {
      expect(frame.playFrame()).toEqual([4, 4])
    });
  });









});
