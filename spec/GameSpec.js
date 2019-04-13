describe('Game', function () {
  if (typeof(require) !== 'undefined') {
    Game = require ('../lib/Game')
  }

  var game, frameFactory
  var trueFunc = function () { return true }
  var falseFunc = function () { return false }
  var frame = {
    addRoll: function () {},
    addBonus: function () {},
    isComplete: function () {},
    isSpare: function () {},
    roll1: null,
    roll2: null
  }
  var completeFrame = {
    addRoll: function () {},
    addBonus: function () {},
    isSpare: function () {},
    isComplete: trueFunc
  }
  var incompleteFrame = {
    addRoll: function () {},
    addBonus: function () {},
    isSpare: function () {},
    isComplete: falseFunc
  }
  var frameWithAScoreOf23 = {
    addRoll: function () {},
    addBonus: function () {},
    isSpare: function () {},
    isComplete: function () { return true },
    score: function () {
      return 23
    }
  }

  describe('#roll', function () {
    describe('used for the first time', function () {
      it('it creates a frame and adds the roll to it', function () {
        var frameFactory = function() { return frame }
        var game = new Game(frameFactory)
        spyOn(frame, 'addRoll')
        game.roll(0)
        expect(frame.addRoll).toHaveBeenCalledWith(0)
      })
    })

    describe('used for the second time', function () {
      describe('if the first frame is complete', function () {
        it('it adds the roll to the next frame', function () {
          var index = 0
          var frameFactory = function() {
            var frame = [frame1, frame2][index]
            index++
            return frame
          }
          var frame1 = completeFrame
          var frame2 = incompleteFrame
          var game = new Game(frameFactory)
          spyOn(frame1, 'addRoll')
          spyOn(frame2, 'addRoll')
          game.roll(10)
          game.roll(1)
          expect(frame1.addRoll).not.toHaveBeenCalledWith(1)
          expect(frame2.addRoll).toHaveBeenCalledWith(1)
        })
      })

      describe('if the first frame is not complete', function () {
        it('it adds the roll to the first frame', function () {
          var index = 0
          var frameFactory = function() {
            var output = index === 0 ?
              frame1 :
              frame2
            index++
            return output
          }
          var frame1 = incompleteFrame
          var frame2 = frame
          var game = new Game(frameFactory)
          spyOn(frame1, 'addRoll')
          spyOn(frame2, 'addRoll')
          game.roll(8)
          game.roll(2)
          expect(frame1.addRoll).toHaveBeenCalledWith(2)
          expect(frame2.addRoll).not.toHaveBeenCalled()
        })
      })
    })

    describe('adding frame bonuses', function () {
      describe('after rolling a 7', function () {
        it('it does not add a frame bonus', function () {
          var frameFactory = function() { return incompleteFrame }
          var game = new Game(frameFactory)
          spyOn(frame, 'addBonus')
          game.roll(0)
          expect(frame.addBonus).not.toHaveBeenCalled()
        })
      })

      describe('after rolling a 7 and a 2', function () {
        it('it adds a bonus of 0', function () {
          var isComplete
          var changeableFrame = {
            addRoll: function () {},
            addBonus: function () {},
            roll1: 7,
            roll2: 2,
            isComplete: function () { return isComplete }
          }
          var frameFactory = function() {
            return changeableFrame
          }
          var game = new Game(frameFactory)
          spyOn(changeableFrame, 'addBonus')

          isComplete = false
          game.roll(7)
          expect(changeableFrame.addBonus).not.toHaveBeenCalled()

          isComplete = true
          game.roll(2)
          expect(changeableFrame.addBonus).toHaveBeenCalledWith(0)
        })
      })

      describe('after rolling a spare', function () {
        it('it does not add a bonus', function () {
          var isComplete
          var changeableFrame = {
            addRoll: function () {},
            addBonus: function () {},
            roll1: 7,
            roll2: 3,
            isComplete: function () { return isComplete }
          }
          var frameFactory = function() {
            return changeableFrame
          }
          var game = new Game(frameFactory)
          spyOn(changeableFrame, 'addBonus')

          isComplete = false
          game.roll(7)
          expect(changeableFrame.addBonus).not.toHaveBeenCalled()

          isComplete = true
          game.roll(3)
          expect(changeableFrame.addBonus).not.toHaveBeenCalled()
        })
      })

      describe('after rolling a spare and a 1', function () {
        it('it adds a bonus of 1 to the spare', function () {
          var isComplete, returnedFrame
          var spareFrame = {
            addRoll: function () {},
            addBonus: function () {},
            isSpare: function () { return true },
            roll1: 7,
            roll2: 3,
            isComplete: function () { return isComplete }
          }
          var oneRollFrame = {
            addRoll: function () {},
            addBonus: function () {},
            isSpare: function () {},
            roll1: 1,
            roll2: null,
            isComplete: function () { return false }
          }
          var frameFactory = function() {
            return returnedFrame
          }
          var game = new Game(frameFactory)
          spyOn(spareFrame, 'addBonus')

          returnedFrame = spareFrame
          isComplete = false
          game.roll(7)
          game.roll(3)
          isComplete = true
          returnedFrame = oneRollFrame
          game.roll(1)
          expect(spareFrame.addBonus).toHaveBeenCalledWith(1)
        })
      })
    })
  })

  describe('#complete', function () {
    describe('after 10 complete frames', function () {
      it('returns true', function () {
        var frameFactory = function() { return completeFrame }
        var game = new Game(frameFactory)
        for (var i = 0; i < 10; i ++) {
          game.roll(0)
        }
        expect(game.complete()).toBe(true)
      })
    })

    describe('after 9 complete frames', function () {
      it('returns false', function () {
        var frameFactory = function() { return completeFrame }
        var game = new Game(frameFactory)
        for (var i = 0; i < 9; i ++) {
          game.roll(0)
        }
        expect(game.complete()).toBe(false)
      })
    })

    describe('after 9 complete frames and 1 incomplete frame', function () {
      it('returns false', function () {
        var counter = 0;
        var frameFactory = function() {
          counter++
          return counter === 10 ? completeFrame : incompleteFrame
        }
        var game = new Game(frameFactory)
        for (var i = 0; i < 0; i ++) {
          game.roll(0)
        }
        expect(game.complete()).toBe(false)
      })
    })
  })

  describe('#score', function () {
    it("returns the sum of the frames' scores", function () {
      var frameFactory = function() {
        return frameWithAScoreOf23
      }
      var game = new Game(frameFactory)
      for (var i = 0; i < 7; i ++) {
        game.roll(0)
      }
      expect(game.score()).toBe(161)
    })

    it("returns zero for a new game", function () {
      var frameFactory = function() {}
      var game = new Game(frameFactory)
      expect(game.score()).toBe(0)
    })
  })
})
