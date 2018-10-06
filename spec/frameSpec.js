import { Frame } from '../src/frame.js';

describe('Frame', function() {
  beforeEach(function() {
    this.frame = new Frame();
  });
  describe('constructor', function() {
    it('should have an empty roll array', function() {
      expect(this.frame.rolls).toEqual([]);
    });
  });
});
