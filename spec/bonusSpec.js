describe("Bonus", function() {
  var bonus;

  beforeEach(function() {
    bonusForSpare = new Bonus(1);
    bonusForStrike = new Bonus(2);
  });

  describe("calculates the extra points for a strike", function() {
      it("adds points from the next two bowls", function() {
        bonusForStrike.addPoints(4);
        bonusForStrike.addPoints(7);
        expect(bonusForStrike.getTotal()).toEqual(11);
      });

      it("does not add more than two bowls", function() {
        bonusForStrike.addPoints(4);
        bonusForStrike.addPoints(5);
        bonusForStrike.addPoints(3);
        expect(bonusForStrike.getTotal()).toEqual(9);
      });
    });

});
