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
    expect(scorecard.allFrames).toEqual( [ [9] ] );
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
    expect(scorecard.allFrames).toEqual( [ [19], [9] ]);
  });

  it("should add the next 1 bowl to the frame when a player bowls a spare", function() {
    scorecard.bowl(7);
    scorecard.bowl(3);
    scorecard.bowl(4);
    scorecard.bowl(2);
    expect(scorecard.allFrames).toEqual( [ [14], [6] ]);
  });

  it("should be able to calculate score when there are successive strikes", function() {
    scorecard.bowl(10);
    scorecard.bowl(10);
    scorecard.bowl(10);
    scorecard.bowl(3);
    scorecard.bowl(4);
    expect(scorecard.allFrames).toEqual( [ [30], [23], [17], [7] ]);
  });

  it("should allow the player to have 3 bowls in the 10th frame if they bowl a strike or spare", function() {
    scorecard.bowl(10);
    scorecard.bowl(10);
    scorecard.bowl(10);
    scorecard.bowl(10);
    scorecard.bowl(10);
    scorecard.bowl(10);
    scorecard.bowl(10);
    scorecard.bowl(10);
    scorecard.bowl(10);
    scorecard.bowl(10);
    scorecard.bowl(10);
    scorecard.bowl(10);
    scorecard.bowl(10);
    scorecard.bowl(10);
    scorecard.bowl(10);
    expect(scorecard.allFrames.length).toEqual(10);
    expect(scorecard.allFrames[scorecard.allFrames.length - 1]).toEqual([30]);
  });

  it("should return the total score", function() {
    scorecard.bowl(10);
    scorecard.bowl(10);
    scorecard.bowl(10);
    scorecard.bowl(10);
    scorecard.bowl(10);
    scorecard.bowl(10);
    scorecard.bowl(10);
    scorecard.bowl(10);
    scorecard.bowl(10);
    scorecard.bowl(10);
    scorecard.bowl(10);
    scorecard.bowl(10);
    expect(scorecard.scoreTotal).toEqual(300);
  });

});