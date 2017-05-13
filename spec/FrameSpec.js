(function() {
  'use strict';
  describe('Frame', function() {
    var Frame = FrameFile.Frame;
    var frame;

    beforeEach(function() {
      frame = new Frame();
    });

    it('has a method processRoll', function() {
      expect(frame.processRoll()).toBeDefined();
    });

    it('is inactive upon creation', function() {
      expect(frame.isActive()).toBe(false);
    });

    it('activate method renders frame active', function() {
      frame.activate();
      expect(frame.isActive()).toBe(true);
    });

    it('has a method deactivate', function() {
      expect(frame.deactivate()).toBeDefined();
    });


  });
}());
