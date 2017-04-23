describe("Feature spec", function() {
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe("Playing one ball", function() {
    it("Should reduce number of pins and increase the score", function() {
      game.play(7);
      expect(game._frame.pins).toEqual(3);
      expect(game._frame.rollsLeft).toEqual(1);
      expect(game._frame.score).toEqual(7);
    });
  });

  describe("Playing a whole frame", function() {
    it("Should move frame to frames array and move to next frame", function() {
      var frame = game._frame
      for(i = 1; i <= 2; i++) {
        game.play(4);
      }
      expect(game.frames).toContain(frame);
      expect(game.currentFrame).toEqual(2);
    });
  });

  describe("Throwing a strike", function() {
    it("Should end the frame and flag that a strike has taken place", function() {
      var frame = game._frame
      game.play(10);
      expect(game.frames).toContain(frame);
      expect(game.currentFrame).toEqual(2);
      expect(frame.isStrike).toBe(true);
    })

    it("Should add combined score of next roll to total", function() {
      game.play(10);
      game.play(4);
      game.play(3);
      expect(game.frames[0].score).toEqual(17);
    })

    it("Should be able to reach maximum score of 30 in one frame", function() {
      game.play(10);
      game.play(10);
      game.play(10);
      expect(game.frames[0].score).toEqual(30);
    })
  })

  describe("Throwing a spare", function() {
    it("Should end the frame and flag that a spare has taken place", function() {
      var frame = game._frame
      game.play(1);
      game.play(9);
      expect(game.frames).toContain(frame);
      expect(game.currentFrame).toEqual(2);
      expect(frame.isSpare).toBe(true);
    })
  })

  describe("Final frame", function() {
    it("should produce one more roll if either a strike or space takes place", function() {
      for(i = 1; i <= 10; i++)
      game.play(10);
      var frame = game._frame
      expect(game.currentFrame).toEqual(10);
      expect(game.rollsLeft(frame)).toEqual(3);
    })
  })
});
