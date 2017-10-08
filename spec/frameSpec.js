'use strict';

describe('Frame', function(){
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('tracks rolls', function(){
    it('tracks 2 rolls', function(){
      frame.roll(5);
      frame.roll(2);
      expect(frame.getRolls()).toEqual([5,2]);
    });

    it('prevents more than 2 rolls', function(){
      frame.roll(5);
      frame.roll(2);
      expect(function() {
        frame.roll(1);
      }).toThrowError('Exceeded maximum rolls');
    });

  });
  describe('records number of pins', function() {

    it('tracks a strike', function(){
      frame.roll(10);
      expect(frame.isStrike()).toEqual(true);
    });

    it('tracks a spare', function(){
      frame.roll(4);
      frame.roll(6);
      expect(frame.isSpare()).toEqual(true);
    });

    it('returns the number of pins knocked down', function(){
      frame.roll(2);
      frame.roll(7);
      expect(frame.getPins()).toEqual(9);
    });

    it('tracks max of 10 pins', function(){
      frame.roll(4);
      expect(function() {
        frame.roll(7);
      }).toThrowError('Exceeded maximum pins');
    });

  });

});
