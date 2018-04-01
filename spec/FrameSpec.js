'use strict'

describe('Frame', function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
  });

  describe('when a frame starts:', function() {
    it('contains an empty score', function(){
     expect(frame._score).toEqual([]);
     });
  });

  describe('while playing the frame:', function() {
    it('records my score', function() {
      frame.roll(1)
      frame.roll(3)
      expect(frame._score).toEqual([1,3]);
    });

    it('displays my tot score', function() {
      frame.roll(1)
      frame.roll(3)
      expect(frame.tot()).toEqual(4);
    });

    it('raises an error if someone tries to knock down more than 10 pins', function() {
      expect(function() {frame.roll(11);}).toThrow(new Error('There are only 10 pins'));
    });

  });

});
