describe("Game", function() {

  beforeEach(function() {
    game = new Game();
  });

  it("starts with a score of 0", function() {
    expect(game.totalScore).toEqual(0);
  });

  it("starts on frame 1", function() {
    expect(game.frame).toEqual(1)
  });

  describe("tracks frame", function() {
    it("moves to the next frame", function() {
      game.nextFrame();
      expect(game.frame).toEqual(2)
    });

    it("saves the frame object", function() {
      frame = {}
      game.saveFrame(frame);
      expect(game.log).toEqual([frame])
    })
  });

  describe("scoring", function() {
    it("adds the score from each frame to the running total", function() {
      firstFrame = {totalScore: 10}
      game.saveFrame(firstFrame)
      game.sumPoints();
      expect(game.totalScore).toEqual(10)
    });

    // it("keeps the score from each frame", function() {
    //   game.addPoints(5);
    //   game.addPoints(6);
    //   expect(game.scorecard).toEqual({1: 5,
    //                                   2: 6})
    // });

    describe("bonus points", function() {
      it("adds the points from the next two rolls if strike", function() {
        firstFrame = {totalScore: 10, strike: true}
        secondFrame = {totalScore: 7, strike: false}
        game.saveFrame(firstFrame)
        game.saveFrame(secondFrame)
        game.addStrikeBonus();
        expect(game.log[0].totalScore).toEqual(17)
      });

      it("adds the points from the following roll if spare", function() {
        firstFrame = {score: [5, 5], totalScore: 10, spare: true};
        secondFrame = {score: [4, 5], totalScore: 9, spare: false};
        game.saveFrame(firstFrame);
        game.saveFrame(secondFrame);
        game.addSpareBonus();
        expect(game.log[0].totalScore).toEqual(14);
      });

    });
  });



});
