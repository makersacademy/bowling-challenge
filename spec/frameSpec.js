'use strict';

describe('Frame', function() {
  var frame;
  var game;

  describe('At the start of each frame', function() {

    it('has a default score of zero', function() {
      expect(frame.getFrameScore()).toEqual(0);
    });

    it('has a roll count of zero', function() {
      expect(frame.getRollCounter()).toEqual(0);
    };

    it('has a starting pin count of 10', function() {
      expect(frame.getPinCount()).toEqual(10);
    });

  });

});
