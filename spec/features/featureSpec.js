describe("Feature Test", function() {
  var game;
  var frame;

  beforeEach(function() {
    game = new Game();
  });

  it("bowls 3 frames and checks the game's frame array", function() {
    game = new Game(3);
    frame1 = new Frame();
    frame1.bowlFirstBall(4);
    frame1.bowlSecondBall(3);
    frame1.calculateFrameTotal();
    game.addFrame(frame1);
    frame2 = new Frame();
    frame2.bowlFirstBall(8);
    frame2.bowlSecondBall(2); // SPARE
    frame2.calculateFrameTotal();
    game.addFrame(frame2);
    frame3 = new Frame();
    frame3.bowlFirstBall(10); // STRIKE
    frame3.calculateFrameTotal();
    game.addFrame(frame3);
    expect(game.checkAllScores().length).toEqual(3);
    expect(game.checkAllScores()[0].currentRoll()).toEqual(7);
    expect(game.checkAllScores()[1].currentRoll()).toEqual(10);
    expect(game.checkAllScores()[2].currentRoll()).toEqual("X");
  });

  it("bowls 3 frames and calculates game total WITHOUT BONUSES", function() {
    game = new Game(3);
    frame1 = new Frame();
    frame1.bowlFirstBall(4);
    frame1.bowlSecondBall(3);
    frame1.calculateFrameTotal();
    game.addFrame(frame1);
    frame2 = new Frame();
    frame2.bowlFirstBall(8);
    frame2.bowlSecondBall(2); // SPARE
    frame2.calculateFrameTotal();
    game.addFrame(frame2);
    frame3 = new Frame();
    frame3.bowlFirstBall(10); // STRIKE
    frame3.calculateFrameTotal();
    game.addFrame(frame3);
    expect(game.calculateGameTotal()).toEqual(27)
  })

});
