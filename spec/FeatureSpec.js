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
    var scorecard = new Scorecard;
    frame.enterFirstRollScore(5, scorecard);
    expect(frame.totalScore).toEqual(5);
  });


  // User story: Calculate simple frame score
  // ----------------------------------------
  // As a player,
  // so that I don't have to calculate my score,
  // I want to see my current total score for a frame when I have made both rolls.

  it("adds second roll score to frame total", function() {
    var frame = new Frame();
    var scorecard = new Scorecard;
    frame.enterFirstRollScore(5, scorecard);
    expect(frame.totalScore).toEqual(5);
    frame.enterSecondRollScore(3, scorecard);
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
    frame1.enterSecondRollScore(3, scorecard);
    var frame2 = new Frame();
    frame2.enterFirstRollScore(7, scorecard);
    frame2.enterSecondRollScore(2, scorecard);
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
    frame1.enterSecondRollScore(4, scorecard);
    frame2.enterFirstRollScore(2, scorecard);
    frame2.enterSecondRollScore(6, scorecard);
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
    frame1.enterSecondRollScore(4, scorecard);
    frame2.enterFirstRollScore(5, scorecard);
    expect(frame1.bonusScore).toEqual(5);
    expect(frame1.totalScore).toEqual(15);
  });
});


// User story: Capture bonus score for strike frame
// ------------------------------------------------
// As a player,
// so that I see the accurate score after a strike,
// I want my bonus added to my strike frame.

describe("Feature: Captures bonus for strike frame", function() {
  it("adds bonus score to strike frame total", function() {
    var scorecard = new Scorecard;
    var frame1 = new Frame;
    var frame2 = new Frame;
    frame1.enterFirstRollScore(10, scorecard);
    frame2.enterFirstRollScore(5, scorecard);
    frame2.enterSecondRollScore(4, scorecard);
    expect(frame1.bonusScore).toEqual(9);
    expect(frame1.totalScore).toEqual(19);
  });
});


// User story: Capture bonuses in 10th frame

// As a player,
// so that my final score is correctly captured,
// I want to be able to play and record bonus rolls in the 10th frame.

describe("Feature: Captures bonus for 10th frame strike", function() {
  it("adds bonus score to 10th frame strike bonus and frame total", function() {
    var scorecard = new Scorecard;
    var frame1 = new Frame;
    var frame2 = new Frame;
    var frame3 = new Frame;
    var frame4 = new Frame;
    var frame5 = new Frame;
    var frame6 = new Frame;
    var frame7 = new Frame;
    var frame8 = new Frame;
    var frame9 = new Frame;
    var frame10 = new Frame;
    frame1.enterFirstRollScore(5, scorecard);
    frame1.enterSecondRollScore(4, scorecard);
    frame2.enterFirstRollScore(2, scorecard);
    frame2.enterSecondRollScore(6, scorecard);
    frame3.enterFirstRollScore(5, scorecard);
    frame3.enterSecondRollScore(4, scorecard);
    frame4.enterFirstRollScore(5, scorecard);
    frame4.enterSecondRollScore(4, scorecard);
    frame5.enterFirstRollScore(5, scorecard);
    frame5.enterSecondRollScore(4, scorecard);
    frame6.enterFirstRollScore(5, scorecard);
    frame6.enterSecondRollScore(4, scorecard);
    frame7.enterFirstRollScore(5, scorecard);
    frame7.enterSecondRollScore(4, scorecard);
    frame8.enterFirstRollScore(5, scorecard);
    frame8.enterSecondRollScore(4, scorecard);
    frame9.enterFirstRollScore(5, scorecard);
    frame9.enterSecondRollScore(4, scorecard);
    frame10.enterFirstRollScore(10, scorecard);
    frame10.enter10thFirstBonusRollScore(3, scorecard);
    frame10.enter10thSecondBonusRollScore(4, scorecard);
    expect(frame10.bonusScore).toEqual(7);
  });

  it("scores 300 for the perfect game", function() {
    var scorecard = new Scorecard;
    var frame1 = new Frame;
    var frame2 = new Frame;
    var frame3 = new Frame;
    var frame4 = new Frame;
    var frame5 = new Frame;
    var frame6 = new Frame;
    var frame7 = new Frame;
    var frame8 = new Frame;
    var frame9 = new Frame;
    var frame10 = new Frame;
    frame1.enterFirstRollScore(10, scorecard);
    frame2.enterFirstRollScore(10, scorecard);
    frame3.enterFirstRollScore(10, scorecard);
    frame4.enterFirstRollScore(10, scorecard);
    frame5.enterFirstRollScore(10, scorecard);
    frame6.enterFirstRollScore(10, scorecard);
    frame7.enterFirstRollScore(10, scorecard);
    frame8.enterFirstRollScore(10, scorecard);
    frame9.enterFirstRollScore(10, scorecard);
    frame10.enterFirstRollScore(10, scorecard);
    frame10.enter10thFirstBonusRollScore(10, scorecard);
    frame10.enter10thSecondBonusRollScore(10, scorecard);
    expect(scorecard.calculateTotalScore()).toEqual(300);
  });
});