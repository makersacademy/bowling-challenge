describe("Scorecard", function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it("should score 1 when a pin is knocked over", function() {
    scorecard.bowl(1);
    expect(scorecard.score()).toEqual(1);
  });

  it("should start with a score of 0", function() {
    expect(scorecard.score()).toEqual(0);
  });

  it("should score 5 when 3 then 2 pins knocked over", function() {
    scorecard.bowl(3);
    scorecard.bowl(2);
    expect(scorecard.score()).toEqual(5);
  });

  it("should not accept 11 pins being knocked over in 1 bowl", function() {
    expect(function() { scorecard.bowl(11); }).toThrow();
  });

  it("should not accept 5 then 6 pins in 1 frame", function() {
    scorecard.bowl(5);
    expect(function() { scorecard.bowl(6); }).toThrow();
  });

  it ("should start on the first frame", function() {
    expect(scorecard.whichFrame()).toEqual(1);
  });

  it("should move to the second frame after two bowls", function() {
    scorecard.bowl(1);
    scorecard.bowl(5);
    expect(scorecard.whichFrame()).toEqual(2);
  });

  it("should be on frame 8 after 12 bowls, inc. 2 strikes", function() {
    scorecard.multibowl(5,4,3,4,10,5,4,7,3,10,0,0);
    expect(scorecard.whichFrame()).toEqual(8);
  });

  it("should have score 74 from 5,4,3,4,10,5,4,7,3,10,0,0", function() {
    scorecard.multibowl(5,4,3,4,10,5,4,7,3,10,0,0);
    expect(scorecard.score()).toEqual(74);
  });

});
