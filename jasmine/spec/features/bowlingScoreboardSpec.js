describe("BowlingScoreboard", function() {
  var bowlingScoreboard;

  beforeEach(function() {
    bowlingScoreboard = new BowlingScoreboard(Frame);
  });

  // USER STORY 2
  // As a player
  // So I can play my game
  // I want my scoreboard to be created with 10 frames
  it("is made by 10 frames", function() {
    expect(bowlingScoreboard.frames.length).toEqual(10);
  });


  // USER STORY 3
  // As a player
  // In order to play a new frame
  // I want ten new pins to be created on each frame
  it("has 10 pins on each new frame ", function() {
    for (i = 0; i < 10; i++) {
      expect(bowlingScoreboard.frames[i].standingPins).toEqual(10);
    };
  });

  // USER STORY 4
  // As a player
  // So I can play every frame
  // I want to roll 2 times for each frame
  it("can roll 2 times per frame", function() {
    for (i = 0; i < 10; i++) {
      expect(bowlingScoreboard.frames[i].rolls.length).toEqual(2);
    };
  });

  // USER STORY 5
  // As a player
  // So I can score points
  // I want to count how many pins I knocked down on each roll in one frame
  // CRITERIA: cannot knock down more than standing pins
  xit("can roll 2 times per frame", function() {
    bowlingScoreboard.frames[2].rolls[0].setKnockedDownPins = 4
    expect(bowlingScoreboard.frames[i].standingPins).toEqual(6);
  });

});
