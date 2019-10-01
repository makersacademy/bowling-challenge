describe('Game', function () {
  if (typeof(require) !== 'undefined') {
    Game = require ('../lib/Game')
  }

  var trueFunc = function () { return true }
  var falseFunc = function () { return false }
  var frame = {
    name: 'frame',
    addRoll: function () {},
    addBonus: function () {},
    isComplete: function () {},
    isSpare: function () {},
    roll1: { pins: null },
    roll2: { pins: null }
  }
  var completeFrame = {
    name: 'completeFrame',
    addRoll: function () {},
    addBonus: function () {},
    isSpare: function () {},
    isComplete: trueFunc,
    roll1: { pins: null },
    roll2: { pins: null }
  }
  var incompleteFrame = {
    name: 'incompleteFrame',
    addRoll: function () {},
    addBonus: function () {},
    isSpare: function () {},
    isComplete: falseFunc,
    roll1: { pins: null },
    roll2: { pins: null }
  }
  var frameWithAScoreOf23 = {
    name: 'frameWithAScoreOf23',
    addRoll: function () {},
    addBonus: function () {},
    isSpare: function () {},
    isComplete: function () { return true },
    score: function () {
      return 23
    },
    roll1: { pins: null },
    roll2: { pins: null }
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
          var injectedFrame
          var frameFactory = function() {
            return injectedFrame
          }
          var game = new Game(frameFactory)
          spyOn(completeFrame, 'addRoll')
          spyOn(incompleteFrame, 'addRoll')

          injectedFrame = completeFrame
          game.roll(10)
          injectedFrame = incompleteFrame
          game.roll(1)
          expect(completeFrame.addRoll).not.toHaveBeenCalledWith(1)
          expect(incompleteFrame.addRoll).toHaveBeenCalledWith(1)
        })
      })

      describe('if the first frame is not complete', function () {
        it('it adds the roll to the first frame', function () {
          var returnedFrame
          var frameFactory = function() {
            return injectedFrame
          }
          var game = new Game(frameFactory)
          spyOn(incompleteFrame, 'addRoll')
          spyOn(frame, 'addRoll')

          injectedFrame = incompleteFrame
          game.roll(8)
          injectedFrame = frame
          game.roll(2)
          expect(incompleteFrame.addRoll).toHaveBeenCalledWith(2)
          expect(frame.addRoll).not.toHaveBeenCalled()
        })
      })
    })

    describe('adding frame bonuses', function () {
      describe('after rolling a 7', function () {
        it('it does not add a frame bonus', function () {
          var frameFactory = function() { return incompleteFrame }
          var game = new Game(frameFactory)
          spyOn(incompleteFrame, 'addBonus')
          game.roll(0)
          expect(incompleteFrame.addBonus).not.toHaveBeenCalled()
        })
      })

      describe('after rolling a 7 and a 2', function () {
        it('it adds a bonus of 0', function () {
          var isComplete
          var changeableFrame = {
            addRoll: function () {},
            addBonus: function () {},
            roll1: { pins: 7 },
            roll2: { pins: 2 },
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
            roll1: { pins: 7 },
            roll2: { pins: 3 },
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
            roll1: { pins: 7 },
            roll2: { pins: 3 },
            isComplete: function () { return isComplete }
          }
          var oneRollFrame = {
            addRoll: function () {},
            addBonus: function () {},
            isSpare: function () {},
            roll1: { pins: 1 },
            roll2: { pins: null },
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
