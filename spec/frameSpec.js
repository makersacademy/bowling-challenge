'use strict';

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame(1);
  });

  describe('constructor', function() {
    it('has an ID', function() {
      expect(frame.getID()).toEqual(1);
    });
  });
});
