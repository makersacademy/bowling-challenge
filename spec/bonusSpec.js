describe("Bonus", function() {
  var bonus;
  var frame;

  beforeEach(function() {
    frame = new Frame(1);
  });

  describe("type", function() {
    it("returns the type of the bonus", function() {
      bonus = new Bonus("strike");
      expect(bonus.type()).toEqual("strike");
    });
  });

  describe("calculate bonus", function() {
    it("calculates score based on type and passed frame", function() {
      spyOn(frame, "getScore").and.returnValue(7);
      bonus = new Bonus("strike");
      bonus.calculate(frame);
      expect(bonus.getScore()).toEqual(7);
    });
  });
});
