'use strict';

describe('Frame', function () {

  var frame;

  beforeEach(function () {
    frame = new Frame();
  })

  describe('score', function () {
    
    it('has a default value of nothing', function () {
      expect(frame.score()).toEqual(undefined);  
    });

  })

  describe('pinsRemaining', function () {
    
    it('has a default of 10 pins remaining to knock down', function () {
      expect(frame.pinsRemaining()).toEqual(10);
    });
  
  });

  describe('roll', function () {
    
    it('knocks down a number of pins', function () {
      frame.roll(5)
      expect(frame.pinsRemaining()).toEqual(5);
    });

  });

});
