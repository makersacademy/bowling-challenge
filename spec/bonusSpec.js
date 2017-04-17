describe("Bonus", function() {
  var bonus;

  beforeEach(function() {
    bonus = new Bonus();
  });

  describe("calculates the extra points for a strike", function() {
    beforeEach(function() {
      bonus.set("strike");
      bonus.addPoints(4);
      bonus.addPoints(7);
    })

    it("sets the number of bowls to be added to two", function() {
      expect(bonus.numberOfBowls).toEqual(2);
    });

    it("adds points from the next two bowls", function() {
      expect(bonus.getTotal()).toEqual(11);
    });

    it("does not add more than two bowls", function() {
      bonus.addPoints(3);
      expect(bonus.getTotal()).toEqual(11);
    });

    it("marks itself as complete", function() {
      expect(bonus.isComplete).toEqual(true);
    });
  });

  describe("calculates the extra points for a spare", function() {
    beforeEach(function() {
      bonus.set("spare");
    })

    it("sets the number of bowls to be added to one", function() {
      expect(bonus.numberOfBowls).toEqual(1);
    });

    it("adds points from the next bowl", function() {
      bonus.addPoints(4);
      expect(bonus.getTotal()).toEqual(4);
    });

    it("does not add more than one bowl", function() {
      bonus.addPoints(4);
      bonus.addPoints(5);
      expect(bonus.getTotal()).toEqual(4);
    });
  });


});
