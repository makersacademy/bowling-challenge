// 1. Gutter game

describe("Feature: Gutter game", function() {
  it("returns complete scorecard after 10 frames", function() {
    var scorecard = new Scorecard;
    var frameNumber = 1;
    for (frameNumber; frameNumber < 11; frameNumber++) {
      frame = new Frame();
      frame.totalScore = 0;
      scorecard.frames.push(frame);
    }
    expect(scorecard.isComplete()).toBe(true);
  });
  
  it("returns zero total score for 10 gutter frames", function() {
    var scorecard = new Scorecard;
    var frameNumber = 1;
    for (frameNumber; frameNumber < 11; frameNumber++) {
      frame = new Frame();
      frame.totalScore = 0;
      scorecard.frames.push(frame);
    }
    expect(scorecard.calculateTotalScore()).toEqual(0);
  });
});

// User story: Enter roll score
// ----------------------------
// As a player,
// so that I don't have to remember my score,
// I want to enter the number of pins I knock down with a single roll into a scorecard.

describe("Feature: Roll", function() {
  it("captures first roll score", function() {
    var frame = new Frame();
    frame.enterFirstRollScore(5);
    expect(frame.totalScore).toEqual(5);
  });


  // User story: Calculate simple frame score
  // ----------------------------------------
  // As a player,
  // so that I don't have to calculate my score,
  // I want to see my current total score for a frame when I have made both rolls.

  it("adds second roll score to frame total", function() {
    var frame = new Frame();
    frame.enterFirstRollScore(5);
    expect(frame.totalScore).toEqual(5);
    frame.enterSecondRollScore(3);
    expect(frame.totalScore).toEqual(8);
  });
});


// User story: Add frames to scorecard
// -----------------------------------
// As a player,
// so that I can see the current progress of the game,
// I want each frame to be added to the scorecard as it is started.

describe("Feature: Adds frames to scorecard", function() {
  it("adds frames to scorecard", function() {
    var scorecard = new Scorecard;
    var frame1 = new Frame();
    frame1.enterFirstRollScore(4, scorecard);
    frame1.enterSecondRollScore(3);
    var frame2 = new Frame();
    frame2.enterFirstRollScore(7, scorecard);
    frame2.enterSecondRollScore(2);
    expect(scorecard.frames.length).toEqual(2);
  });
});


// User story: Calculate running total for game
// --------------------------------------------
// As a player,
// so that I don't have to calculate a running total,
// I want to see my running total score for the game.

describe("Feature: Shows running total", function() {
  it("displays combined total of all frames added", function() {
    var scorecard = new Scorecard;
    var frame1 = new Frame;
    var frame2 = new Frame;
    frame1.enterFirstRollScore(5, scorecard);
    frame1.enterSecondRollScore(4);
    frame2.enterFirstRollScore(2, scorecard);
    frame2.enterSecondRollScore(6);
    expect(scorecard.calculateTotalScore()).toEqual(17);
  });
});


// User story: Capture bonus score for spare frame
// -----------------------------------------------
// As a player,
// so that I see the accurate score after a spare,
// I want my bonus added to my spare frame.

describe("Feature: Captures bonus for spare frame", function() {
  it("adds bonus score to spare frame total", function() {
    var scorecard = new Scorecard;
    var frame1 = new Frame;
    var frame2 = new Frame;
    frame1.enterFirstRollScore(6, scorecard);
    frame1.enterSecondRollScore(4);
    frame2.enterFirstRollScore(5, scorecard);
    expect(frame1.bonusScore).toEqual(5);
    expect(frame1.totalScore).toEqual(15);
  });
});