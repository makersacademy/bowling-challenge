describe("Game", function () {

  beforeEach(function () {
    game = new Game()
  })

  it("stores current frame being played", function () {
    expect(game.currentFrame).toEqual(1)
  })

  it("stores current roll being played", function () {
    expect(game.currentRoll).toEqual(1)
  })

  describe("play", function () {

    it("updates current score when an argument for number of hit pins is given", function () {
      game.play(3)
      expect(game.currentScore).toEqual(3)
    })

    it("returns string when number of pins passed exceeds reminaining pins", function () {
      game.play(7)
      expect(game.play(4)).toEqual('Too many pins')
    })

    it("updates current score when a random number of pins are hit", function () {
      spyOn(game,'bowl').and.returnValues(7, 2, 10, 4, 2)
      for (var i = 0; i < 5; i++) {
        game.play()
      }
      expect(game.currentScore).toEqual(31)
    })

    it("updates scorecard with number of pins hit", function () {
      spyOn(game,'bowl').and.returnValue(3)
      game.play()
      expect(game.scorecard[1][1]['hitPins']).toEqual(3)
    })

    it("updates scorecard with number of remaining pins in current frame", function () {
      spyOn(game,'bowl').and.returnValue(2)
      game.play()
      expect(game.scorecard[1]['remainingPins']).toEqual(8)
    })

    it("updates scorecard with score for the current frame", function () {
      spyOn(game,'bowl').and.returnValue(3)
      game.play()
      expect(game.scorecard[1]['frameScore']).toEqual(3)
    })

    it("adds bonus points to the frame where a strike was bowled", function () {
      spyOn(game,'bowl').and.returnValues(10, 3, 4)
      for (var i = 0; i < 3; i++) {
        game.play()
      }
      expect(game.scorecard[1]['frameScore']).toEqual(17)
    })

    it("adds bonus points to the frame where a spare was bowled", function () {
      spyOn(game,'bowl').and.returnValues(2, 8, 6, 3)
      for (var i = 0; i < 4; i++) {
        game.play()
      }
      expect(game.scorecard[1]['frameScore']).toEqual(16)
    })

    it("adds bonus points to previous two frames with two consecutive strikes", function () {
      spyOn(game,'bowl').and.returnValues(10, 10, 4, 5)
      for (var i = 0; i < 4; i++) {
        game.play()
      }
      expect(game.scorecard[1]['frameScore']).toEqual(24)
      expect(game.scorecard[2]['frameScore']).toEqual(19)
    })

    describe("lastFrame", function () {
      it("adds points to scorecard if player strikes on first roll", function () {
        spyOn(game,'bowl').and.returnValues(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10)
        for (var i = 0; i < 19; i++) {
          game.play()
        }
        expect(game.scorecard[10]['frameScore']).toEqual(10)
      })
      it("if player rolls a strike, the pins are reset for the next roll", function () {
        spyOn(game,'bowl').and.returnValues(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10)
        for (var i = 0; i < 19; i++) {
          game.play()
        }
        expect(game.scorecard[10]['remainingPins']).toEqual(10)
      })
      it("if player rolls a spare, the pins are reset for the next roll", function () {
        spyOn(game,'bowl').and.returnValues(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 8)
        for (var i = 0; i < 20; i++) {
          game.play()
        }
        expect(game.scorecard[10]['remainingPins']).toEqual(10)
      })
      it("if player rolls a strike on the first roll but not on the second, player can roll the bonus", function () {
        spyOn(game,'bowl').and.returnValues(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 8, 1)
        for (var i = 0; i < 21; i++) {
          game.play()
        }
        expect(game.scorecard[10][3]['hitPins']).toEqual(1)
      })
      it("if player rolls a strike on the first and second rolls, player can roll the bonus", function () {
        spyOn(game,'bowl').and.returnValues(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 10, 3)
        for (var i = 0; i < 21; i++) {
          game.play()
        }
        expect(game.scorecard[10][3]['hitPins']).toEqual(3)
      })
      it("calculates final score when game is over with no third roll", function () {
        spyOn(game,'bowl').and.returnValues(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2)
        for (var i = 0; i < 20; i++) {
          game.play()
        }
        expect(game.finalScore).toEqual(23)
      })
      it("calculates final score when game is over with a third roll", function () {
        spyOn(game,'bowl').and.returnValues(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 2, 3)
        for (var i = 0; i < 21; i++) {
          game.play()
        }
        expect(game.finalScore).toEqual(33)
      })
      it("prevents play when game is over", function () {
        spyOn(game,'bowl').and.returnValues(1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 10, 2, 3)
        for (var i = 0; i < 21; i++) {
          game.play()
        }
        expect(game.play()).toEqual("Game over")
      })

    })


  })

})
