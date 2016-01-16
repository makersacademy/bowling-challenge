describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  })

	describe("When not spare nor strike", function() {
    describe("#play", function() {
      it("returns the value of the pins hit", function() {
        game.play(6)
        expect(game.play(3)).toEqual(3)
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
      it("returns 3 when it's 3rd frame", function () {
        game.play(6)
        game.play(2)
        game.play(2)
        game.play(2)
        game.play(2)
        expect(game.currentFrameNumber()).toEqual(3)
      })
    })

    describe("#currentRoll", function() {
      it("returns 1 if last play was a first roll", function() {
        game.play(3)
        expect(game.currentRoll()).toEqual(1)
      })
      it("returns 2 if last play was a second roll", function() {
        game.play(3)
        game.play(2)
        expect(game.currentRoll()).toEqual(2)
      })
    });

    describe("#getTotScore", function() {
      xit("returns the total score", function() {
        game.play(3)
        expect(game.getTotScore()).toEqual(3)
      })
      it("returns total score", function() {
        game.play(3)
        game.play(2)
        game.play(3)
        game.play(2)
        game.play(3)
        game.play(2)
        expect(game.getTotScore()).toEqual(15)
      })
    });
    describe("#isOver", function() {
      it("returns false if not over", function() {
        for (var i = 1; i < 10; i++) {
          game.play(3)
          game.play(2)
        }
        expect(game.isOver()).toBeFalsy()
      })
      it("returns true if over", function() {
        for (var i = 1; i <= 10; i++) {
          game.play(3)
          game.play(2)
        }
        expect(game.isOver()).toBeTruthy()
      })
    });
	})

	describe("When spare", function() {
    describe("#play", function() {
      it ("returns the value of the pins hit", function() {
        game.play(6);
        expect(game.play(3)).toEqual(3)
      })
    })
	})

	describe("When strike", function() {
    describe("#play", function() {
      it ("returns the value of the pins hit", function() {
        game.play(10);
        game.play(2);
        expect(game.play(3)).toEqual(3)
      })
    })
	})

})
