describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  })

	describe("When not spare nor strike", function() {
    describe("#play", function() {
      it("1st roll it returns the value of current roll and tot score", function () {
        expect(game.play(6)).toEqual(6)
      })
      it("2nd roll it returns the number of hit pins and tot score", function() {
        game.play(6)
        expect(game.play(3)).toEqual(9)
      })
    })

    describe("#currentFrameNumber", function() {
      it("returns 1 when it's 1st frame", function () {
        game.play(6)
        expect(game.currentFrameNumber()).toEqual(1)
      })
      it("returns 2 when it's 2nd frame", function () {
        game.play(6)
        game.play(2)
        game.play(2)
        expect(game.currentFrameNumber()).toEqual(2)
      })
      it("returns 2 when it's 2nd frame", function () {
        game.play(6)
        game.play(2)
        game.play(2)
        expect(game.currentFrameNumber()).toEqual(3)
      })
    })

    describe("#setTotScore", function() {
      it("returns score pending if only first roll has been played", function() {
        game.play(6)
        expect(game.setTotScore()).toEqual(0)
      })
    })

      describe("#getTotScore", function() {
        xit("returns total score after second roll", function() {
          game.play(6)
          game.play(3)
          expect(game.getTotScore()).toEqual(9)
        })
      })

      describe("#isOver", function() {
        it("returns true when game is over", function() {
          for (var n = 0; n < 10; n++ ) {
            game.play(3)
            game.play(4)
          }
          expect(game.isOver()).toEqual(true)
        })
      })
	})

	describe("When spare", function() {
    describe("#play", function() {
      xit ("returns the number of hit pins and total score when spare", function() {
        game.play(6);
        expect(game.play(4)).toEqual("4 hit / Tot score 0")
      })

      xit("2nd frame returns the total score with the bonus of previous frame", function() {
        game.play(6);
        game.play(4);
        game.play(2);
        expect(game.play(3)).toEqual("3 hit / Tot score 17")
      })
    })

    describe("#setTotScore", function() {
      it("returns pending when there is a spare", function() {
        game.play(6)
        game.play(4)
        expect(game.setTotScore()).toEqual(0)
      })
    })

    describe("#getTotScore", function() {
      xit("returns the score with the bonus after a spare frame", function() {
        game.play(6)
        game.play(4)
        game.play(2)
        game.play(3)
        expect(game.getTotScore()).toEqual(17)
      })
    })
	})

	describe("When strike", function() {
    describe("#play", function() {
      xit ("returns the number of hit pins and total score when spare", function() {
        expect(game.play(10)).toEqual("Strike! / Tot score 0")
      })

      xit("2nd frame returns the total score with the bonus of previous frame", function() {
        game.play(10);
        game.play(2);
        expect(game.play(3)).toEqual("3 hit / Tot score 20")
      })
    })
	})

})
