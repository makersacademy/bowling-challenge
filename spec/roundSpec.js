describe("Round", function() {
  var round;

  beforeEach(function() {
    round = new Round();
  });

  describe("new round", function() {
    it("have two bowls (unless strike)", function() {
      expect(round.bowl).toEqual(2);
    });

    it("has ten pins", function() {
      expect(round.pins).toEqual(10);
    });

  });

})