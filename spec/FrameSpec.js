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

    it('has a method activate', function() {
      expect(frame.activate()).toBeDefined();
    });

    it('has a method deactivate', function() {
      expect(frame.deactivate()).toBeDefined();
    });


  });
}());
