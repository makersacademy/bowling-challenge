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

    it("has an empty result", function() {
      expect(round.result).toEqual([]);
    });

    it("is in progress", function() {
      expect(round.isInProgress).toBe(true);
    });
  });

  describe("tracking the progress of the round", function() {
    it("is in progress if one or both rolls are empty", function() {
      round.acceptPins(0);
      expect(round.isFull()).toBe(false);
    });

    it("is not in progress if both rolls are full", function() {
      round.acceptPins(3);
      round.acceptPins(5);
      expect(round.isFull()).toBe(true);
    });
  });

  describe("check the validity of the pins", function() {
    it("only accepts numbers", function() {
      expect(function() {round.acceptPins("one");}).toThrow("Invalid pin entry");
    });

    it("only accepts a number between 0 and 10", function() {
      expect(function() {round.acceptPins(15);}).toThrow("Invalid pin entry");
    });

    it("only accepts a second roll if the round total won't be exceeded", function() {
      round.acceptPins(8);
      expect(function() {round.acceptPins(3);}).toThrow("Invalid pin entry");
    });
  });

  describe("stores the values of the rolls correctly", function() {
    it("accepts entries and stores them in the correct variables", function() {
      round.acceptPins(8);
      round.acceptPins(1);
      expect(round.rollOne).toEqual(8);
      expect(round.rollTwo).toEqual(1);
    });

    it("does not overwrite existing rolls", function() {
      round.acceptPins(8);
      round.acceptPins(1);
      round.acceptPins(5);
      expect(round.rollOne).toEqual(8);
      expect(round.rollTwo).not.toEqual(5);
    });

    it("skips rollTwo if 10 is entered for rollOne", function() {
      round.acceptPins(10);
      expect(function(){round.acceptPins(7);}).not.toThrow("Invalid pin entry");
    });
  });
});
