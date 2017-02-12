describe("BowlingScoreboard", function() {
  var bowlingScoreboard;

  beforeEach(function() {
    bowlingScoreboard = new BowlingScoreboard();
  });

  // USER STORY 1
  // As a player
  // So I can play my game
  // I want my scoreboard to be created with 10 frames
  it("is made by 10 frames", function() {
    expect(bowlingScoreboard.frames.length).toEqual(10);
  });


  // USER STORY 2
  // As a player
  // So I can play my game
  // I want my scoreboard to be created with 10 frames
  it("has 10 pins on each new frame ", function() {
    for (i = 0; i < 10; i++) {
      expect(bowlingScoreboard.frames[i].pins).toEqual(10);
    };
  });
});
