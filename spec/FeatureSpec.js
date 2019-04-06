// 1. Gutter game

describe("Gutter Game Feature", function() {
  it("returns complete scorecard after 10 frames", function() {
    var scorecard = new Scorecard;
    var frameNumber = 1;
    for (frameNumber; frameNumber < 11; frameNumber++) {
      frame = new Frame;
      frame.totalScore = 0;
      scorecard.frames.push(frame);
    }
    expect(scorecard.isComplete()).toBe(true);
  });
  
  it("returns zero total score for 10 gutter frames", function() {
    var scorecard = new Scorecard;
    var frameNumber = 1;
    for (frameNumber; frameNumber < 11; frameNumber++) {
      frame = new Frame;
      frame.totalScore = 0;
      scorecard.frames.push(frame);
    }
    expect(scorecard.totalScore()).toEqual(0);
  });
});

// User story: Enter roll score

// As a player,
// so that I don't have to remember my score,
// I want to enter the number of pins I knock down with a single roll into a scorecard.

describe("Roll Feature", function() {
  it("captures first roll score", function() {
    var frame = new Frame;
    frame.enterFirstRollScore(5);
    expect(frame.totalScore).toEqual(5);
  });


  // User story: Calculate simple frame score

  // As a player,
  // so that I don't have to calculate my score,
  // I want to see my total score for a frame (when I have not knocked all pins down).

  it("adds second roll score to frame total", function() {
    var frame = new Frame;
    frame.enterFirstRollScore(5);
    expect(frame.totalScore).toEqual(5);
    frame.enterSecondRollScore(3);
    expect(frame.totalScore).toEqual(8);
  });
});
