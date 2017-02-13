describe("Features", function() {
  var bowlingScoreboard;

  beforeEach(function() {
    bowlingScoreboard = new BowlingScoreboard(Player, Frame, Roll, Referee);
  });

  // USER STORY 2
  // As a player
  // So I can play my game
  // I want to be able to run 10 frame
  it("is made by 10 frames", function() {
    expect(bowlingScoreboard.player[0].maxFrames).toEqual(10);
  });


  // USER STORY 3
  // As a player
  // In order to play a new frame
  // I want ten new pins to be created on each frame
  it("has 10 pins on each new frame ", function() {
      bowlingScoreboard.player[0].nextRoll();
      expect(bowlingScoreboard.player[0].activeFrame().getStandingPins()).toEqual(10);
  });

  // USER STORY 4
  // As a player
  // So I can play every frame
  // I want to roll 2 times for each frame
  it("can roll 2 times per frame", function() {
    bowlingScoreboard.player[0].nextRoll();
    expect(bowlingScoreboard.player[0].activeFrame().maxRolls).toEqual(2);
  });

  // USER STORY 5
  // As a player
  // So I can score points
  // I want to count how many pins I knocked down on each roll in one frame
  // CRITERIA: cannot knock down more than standing pins
  it("can count how many pins have been knocked down per roll", function() {
    bowlingScoreboard.player[0].nextRoll();
    bowlingScoreboard.player[0].activeFrame().setKnockedDownPins(4);
    expect(bowlingScoreboard.player[0].activeFrame().activeRoll().getKnockedDownPins()).toEqual(4);
    bowlingScoreboard.player[0].nextRoll();
    bowlingScoreboard.player[0].activeFrame().setKnockedDownPins(5);
    expect(bowlingScoreboard.player[0].activeFrame().activeRoll().getKnockedDownPins()).toEqual(5);
    expect(bowlingScoreboard.player[0].activeFrame().getStandingPins()).toEqual(1);
  });

  // USER STORY 6
  // As a player
  // In order to perform a strike
  // I want my frame to end when all 10 pins are knocked down
  it('ends the frame if 10 pins are knocked', function() {
    bowlingScoreboard.player[0].nextRoll();
    bowlingScoreboard.player[0].frames[0].setKnockedDownPins(10);
    expect(function(){bowlingScoreboard.player[0].activeFrame().nextRoll()}).toThrow('Cannot advance to the next roll: pins have finished for this frame!');
  });

  // USER STORY 7
  // As a player,
  // In order to get the strike bonus,
  // I want my bonus to be calculated as the number of pins knocked down by the next two rolls.
  it('calculates the strike bonus as the number of pins knocked by the next two rolls', function() {
    bowlingScoreboard.player[0].nextRoll();
    bowlingScoreboard.player[0].activeFrame().setKnockedDownPins(10);
    bowlingScoreboard.player[0].nextRoll();
    expect(bowlingScoreboard.player[0].activeFrame().score).toEqual(10);
    bowlingScoreboard.player[0].activeFrame().setKnockedDownPins(5);
    bowlingScoreboard.player[0].nextRoll();
    bowlingScoreboard.player[0].activeFrame().setKnockedDownPins(4);
    bowlingScoreboard.player[0].nextRoll();
    expect(bowlingScoreboard.player[0].frame[0].score).toEqual(19);
  });

});
