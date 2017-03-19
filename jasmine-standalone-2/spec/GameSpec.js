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

      game.addPoints(7);

      expect(game.totalScore).toEqual(7)
    });

    it("keeps the score from each frame", function() {
      console.log(game.log)
      game.addPoints(5);
      console.log(game.log)
      game.addPoints(6);
      console.log(game.log)
      expect(game.scorecard).toEqual({1: 5,
                                      2: 6})
    });

    // describe("bonus points", function() {
    //   it("adds the points from the next two rolls if strike", function() {
    //     game.addPoints(10);
    //     game.addPoints(7);
    //     expect(game.scorecard).toEqual({1: 17,
    //                                     2: 7})
    //   })
    // });
  });



});
