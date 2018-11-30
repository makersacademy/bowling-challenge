'use strict';

describe('Scorer unit tests', function() {

  var scorer;

  beforeEach(function() {
    scorer = new Scorer();
  });

  describe("basic scoring functionality(not spares or strikes)", function() {
    it("can score multiple frames scores together and return a total", function() {
      scorer.firstBowl(4)
      scorer.secondBowl(2)
      scorer.firstBowl(5)
      scorer.secondBowl(7)
      expect(scorer.total).toEqual(18)
    });
  });

  describe("fuctionality exists for recording whether a strike was bowled \
  in the previous 2 frames", function() {
    it("can use the #firstStrike variable to check for a strike in the \
    previous frame", function() {
      scorer.firstBowl(10);
      expect(scorer.firstStrike).toEqual(true);
    });

    it("can use #secondStrike to check for a strike 2 frames ago", function() {
      scorer.firstBowl(10);
      expect(scorer.secondStrike).toEqual(true);
    });
  });

  describe("whether a spare was bowled i the previous frame or not", function() {
    it("can use #spare to check if a spare was bowled in the previous \
    frame", function() {
      scorer.firstBowl(5);
      scorer.secondBowl(5);
      expect(scorer.spare).toEqual(true);
    });

    it("#spare returns false if a spare was not bowled in the previous \
    frame", function() {
      scorer.firstBowl(0);
      scorer.secondBowl(5);
      expect(scorer.spare).toEqual(false);
    });
  });
});
