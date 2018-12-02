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
    it("can use the #strike variable to check for a strike", function() {
      scorer.firstBowl(10);
      scorer.secondBowl(0);
      expect(scorer.strike).toEqual(true);
    });

    it("#strike returns false if user didn't bowl a strike", function() {
      scorer.firstBowl(8);
      scorer.secondBowl(1);
      expect(scorer.strike).toEqual(false);
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

  describe("first and second strike variable values are \
  changed post scoring", function() {
    it("when #firstbowl score is calculated, if first \
    bowl is a strike secondStrike should become true", function() {
      scorer.firstBowl(10);
      scorer.secondBowl(0);
      expect(scorer.firstStrike).toEqual(true)
    });

    it("when #firstbowl score is calculated, if first bowl is not a \
    strike secondStrike should be false", function() {
      scorer.firstBowl(8);
      scorer.secondBowl(2);
      expect(scorer.firstStrike).toEqual(false)
    });

    it("when #firstbowl score is calculated, if user bowled\
     two consecutive strikes #secondStrike should be true", function() {
      scorer.firstBowl(10);
      scorer.secondBowl(0);
      scorer.firstBowl(10);
      scorer.secondBowl(0);
      expect(scorer.secondStrike).toEqual(true)
    });

    it("when #firstbowl score is calculated, if user bowled did not bowl \
     a strike two frames ago #secondStrike should be false", function() {
      scorer.firstBowl(8);
      scorer.secondBowl(2);
      scorer.firstBowl(7);
      scorer.secondBowl(3);
      expect(scorer.secondStrike).toEqual(false)
    });
  });
});
