describe("Round", function() {
  var round;

  beforeEach(function() {
    round = new Round();
  });

  describe("defaults", function() {
    it("has two rolls, which are both null", function() {
      expect(round.rollOne).toBe(null);
      expect(round.rollTwo).toBe(null);
    });

    it("has a roundScore of 0", function() {
      expect(round.giveScore()).toEqual(0);
    });

    it("is in progress", function() {
      expect(round.updateProgress()).toBe(true);
    })
  });

  describe("tracking the progress of the round", function() {
    it("is in progress if one or both rolls are empty", function() {
      round.trackPins(0);
      expect(round.isInProgress).toBe(true);
    });

    it("is not in progress if both rolls are full", function() {
      round.trackPins(3);
      round.trackPins(5);
      expect(round.isInProgress).toBe(false);
    });
  });

  describe("stores the values of the rolls correctly", function() {
    it("accepts entries and stores them in the correct variables", function() {
      round.trackPins(8);
      round.trackPins(1);
      expect(round.rollOne).toEqual(8);
      expect(round.rollTwo).toEqual(1);
    });

    it("does not overwrite existing rolls", function() {
      round.trackPins(8);
      round.trackPins(1);
      round.trackPins(5);
      expect(round.rollOne).toEqual(8);
      expect(round.rollTwo).not.toEqual(5);
    });
  });

  describe("calculating the round score", function() {
    it("calculates the score for a complete round", function() {
      round.trackPins(8);
      round.trackPins(1);
      expect(round.giveScore()).toEqual(9);
    });

    it("calculates the score for an incomplete round", function() {
      round.trackPins(2);
      expect(round.giveScore()).toEqual(2);
    });
  });
});
