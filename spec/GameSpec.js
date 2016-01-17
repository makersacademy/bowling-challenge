describe("Game", function() {
  var game;
  var frame;


	describe("When the current frame is not complete yet", function() {

    beforeEach(function() {
      frame = {
        rollBall: function() {
          return 3
        },
        bothBallThrown: function() {
          return false
        }
      }
      game = new Game();
    })

    describe("#play", function() {
      it("returns the value of the last pins hit in the frame", function() {
        expect(game.play()).toEqual(3)
      })
    })

    describe("#currentFrameNumber", function() {
      it("returns 1 when it's 1st frame", function () {
        game.play()
        expect(game.currentFrameNumber()).toEqual(1)
      })

      it("returns 2 when it's 2nd frame", function () {
        game.play()
        game.play()
        game.play()
        expect(game.currentFrameNumber()).toEqual(2)
      })

      it("returns 3 when it's 3rd frame", function () {
        game.play()
        game.play()
        game.play()
        game.play()
        game.play()
        expect(game.currentFrameNumber()).toEqual(3)
      })
    })

    describe("#currentRoll", function() {
      it("returns 1 if last play was a first roll", function() {
        game.play()
        expect(game.currentRoll()).toEqual(1)
      })

      it("returns 2 if last play was a second roll", function() {
        game.play()
        game.play()
        expect(game.currentRoll()).toEqual(2)
      })
    });

    describe("#getTotScore", function() {
      it("returns the total score", function() {
        game.play()
        expect(game.getTotScore()).toEqual(3)
      })
      it("returns total score", function() {
        game.play()
        game.play()
        game.play()
        game.play()
        game.play()
        game.play()
        expect(game.getTotScore()).toEqual(15)
      })
    });
    
    describe("#isOver", function() {
      it("returns false if not over", function() {
        for (var i = 1; i < 10; i++) {
          game.play()
          game.play()
        }
        expect(game.isOver()).toBeFalsy()
      })
      it("returns true if over", function() {
        for (var i = 1; i <= 10; i++) {
          game.play()
          game.play()
        }
        expect(game.isOver()).toBeTruthy()
      })
    });
	})
})
