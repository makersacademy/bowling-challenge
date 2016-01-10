describe("Game", function() {
  var game;

  beforeEach(function() {
    frame = {
      firstRoll: 6,
      secondRoll: 3,
      framePoints: 9,
      isCompleted: function() {
        return false
      },
      play: function() {
        return 3
      }
    }
    spyOn(Math, "random").and.returnValue(0.39);
    game = new Game();
  });

  describe("#init", function(){
    it("starts with total score 0", function() {
      expect(game.totalPoints).toEqual(0);
    })
    it("starts with a number of playedFrames of 0", function() {
      expect(game.playedFrames.length).toBe(0);
    })
  })

  describe("#play", function() {
    it("adds the current frame to the list of played frames on 2nd roll", function() {
      game.play(frame)
      game.play()
      expect(game.playedFrames).toContain(frame)
    })

    it("returns game with the total score when user ends 10th frame", function() {
      for (var i = 0; i < 19; i++) {
        game.play()
      }
      expect(game.play()).toEqual("Well done! Your total points is 80")
    })
  })

  describe("#isOver", function() {
    it("returns true if the number of played frames is 10", function() {
      for (var i = 0; i < 20; i++) {
        game.play()
      }
      expect(game.isOver()).toEqual(true);
    })
  })

  describe("#getTotalPoints", function() {
    it("calculates the total points at the end of the game", function() {
      for (var i = 0; i < 20; i++) {
        game.play()
      }
      expect(game.getTotalPoints()).toEqual(80)
    })
  })

})
