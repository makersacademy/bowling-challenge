describe("Bonus", function() {
  var bonus;

  beforeEach(function() {
    bonus = new Bonus();
  });

  describe("Calculates the bonus", function() {
    it("Should automatically have no bonus", function() {
      expect(bonus.firstBonus).toEqual(0)
      expect(bonus.secondBonus).toEqual(0)
    })
    it("Should have no bonus", function() {
      bonus.calculate(5,4)
      expect(bonus.firstBonus).toEqual(0)
      expect(bonus.secondBonus).toEqual(0)
    });

    it("Should set first bonus", function() {
      bonus.calculate(7,3)
      expect(bonus.firstBonus).toEqual(1)
      expect(bonus.secondBonus).toEqual(0)
    });

    it("Should set the second and first bonus", function() {
      bonus.calculate(10)
      expect(bonus.firstBonus).toEqual(1)
      expect(bonus.secondBonus).toEqual(1)
    });
  });

  describe("Resets the bonus", function() {
    it("Should reset the bonus", function() {
      bonus.calculate(10)
      bonus.reset()
      expect(bonus.firstBonus).toEqual(0)
      expect(bonus.secondBonus).toEqual(0)
    });
  });
});
