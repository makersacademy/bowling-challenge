describe("Bowling Scorecard", function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it("should record the result of the first bowl", function() {
    scorecard.bowl(6);
    expect(scorecard.currentFrame).toEqual([6]);
  });

  it("should record the result of the first round when complete", function() {
    scorecard.bowl(6);
    scorecard.bowl(3);
    scorecard.bowl(4);
    expect(scorecard.allFrames).toEqual( [ [6, 3] ] );
  });

  it("should move onto the next frame when player bowls a strike", function() {
    scorecard.bowl(10);
    expect(scorecard.allFrames).toEqual( [ [10] ] );
  });

  it("should add the next 2 bowls to the frame when player bowls a strike", function() {
    scorecard.bowl(10);
    scorecard.bowl(4);
    scorecard.bowl(5);
    scorecard.bowl(6);
    expect(scorecard.allFrames).toEqual( [ [19], [4,5] ]);
  });

});