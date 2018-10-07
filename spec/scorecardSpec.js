import { Scorecard } from '../src/scorecard.js';

describe('Scorecard', function() {
  beforeEach(function() {
    this.scorecard = new Scorecard();
  });
  describe('constructor', function() {
    it('should have an empty frames array', function() {
      expect(this.scorecard.frames).toEqual([]);
    });

    it('should have a totalScore of zero', function() {
      expect(this.scorecard.totalScore).toEqual(0);
    });
  });
});
