import { Frame } from '../src/frame.js';

describe('Frame', function() {
  beforeEach(function() {
    this.frame = new Frame();
  });
  describe('constructor', function() {
    it('should have an empty roll array', function() {
      expect(this.frame.rolls).toEqual([]);
    });

    it('should have a score of zero', function() {
      expect(this.frame.score).toEqual(0);
    });

    it('should have a scoreSoFar of zero', function() {
      expect(this.frame.scoreSoFar).toEqual(0);
    });

    it('should have an empty note', function() {
      expect(this.frame.note).toEqual('');
    });

    it('should have an empty outcome', function() {
      expect(this.frame.outcome).toEqual('');
    });
  });
});
