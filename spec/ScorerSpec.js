describe("Scorer", function() {
  var scorer;
  // var song;

  beforeEach(function() {
    scorer = new Scorer();
  });

  it("creates empty json to hold roll values", function() {
    expect(scorer.rolls.one.first).toEqual(null);
  });


});
