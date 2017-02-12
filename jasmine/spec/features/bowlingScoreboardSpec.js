describe("BowlingScoreboard", function() {
  var bowlingScoreboard;

  beforeEach(function() {
    bowlingScoreboard = new BowlingScoreboard(Frame,Roll);
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
      expect(bowlingScoreboard.frames[i].getStandingPins()).toEqual(10);
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
  it("can roll 2 times per frame", function() {
    bowlingScoreboard.frames[2].setKnockedDownPins(4);
    bowlingScoreboard.frames[2].nextRoll();
    bowlingScoreboard.frames[2].setKnockedDownPins(5);
    expect(bowlingScoreboard.frames[2].rolls[0].getKnockedDownPins()).toEqual(4);
    expect(bowlingScoreboard.frames[2].rolls[1].getKnockedDownPins()).toEqual(5);
    expect(bowlingScoreboard.frames[2].getStandingPins()).toEqual(1);
  });

  // USER STORY 6
  // As a player
  // In order to perform a strike
  // I want my frame to end when all 10 pins are knocked down
  it('ends the frame if 10 pins are knocked', function() {
    bowlingScoreboard.frames[2].setKnockedDownPins(10);
    expect(function(){bowlingScoreboard.frames[2].nextRoll()}).toThrow('Cannot advance to the next roll: pins have finished for this frame!');
  });

  // USER STORY 7
  // As a player,
  // In order to get the strike bonus,
  // I want my bonus to be calculated as the number of pins knocked down by the next two rolls.
  it('calculates the strike bonus as the number of pins knocked by the next two rolls', function() {
    bowlingScoreboard.activeFrame().setKnockedDownPins(10);
    bowlingScoreboard.nextRoll();
    expect(bowlingScoreboard.frame[0].score).toEqual(10);
    bowlingScoreboard.activeFrame().setKnockedDownPins(5);
    bowlingScoreboard.nextRoll();
    bowlingScoreboard.activeFrame().setKnockedDownPins(4);
    expect(bowlingScoreboard.frame[0].score).toEqual(19);
  });

});
