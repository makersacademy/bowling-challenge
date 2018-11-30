'use strict';

describe('feature test', function() {

  var scorer;

  beforeEach(function() {
    scorer = new Scorer();
  });

  describe("scorecard features", function() {
    it("as a user i want to be able to calculate  \
    the score of my first bowl", function() {
      scorer.firstBowl(5);
      expect(scorer.firstBowlScore).toEqual(5);
    });
  });

  it("should be able to calculate the score of users second bowl", function() {
    scorer.secondBowl(5)
    expect(scorer.secondBowlScore).toEqual(5);
  });

  it("should be able to calculate the score of both bowls", function() {
    scorer.firstBowl(5);
    scorer.secondBowl(5)
    expect(scorer.total).toEqual(10);
  });

  // it("should be able to calculate the score of multiple frames")
});
