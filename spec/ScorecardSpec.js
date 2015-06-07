describe("Scorecard", function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it("can record a frame", function() {
    scorecard.recordFrame({});
    expect(scorecard.frames).toEqual([{}]);
  });

});