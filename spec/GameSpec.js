describe('Game', function () {
  if (typeof(require) !== 'undefined') {
    Game = require ('../lib/Game')
  }

  var game, frameFactory
  var trueFunc = function () { return true }
  var falseFunc = function () { return false }
  var frame = {
    addRoll: function () {}
  }
  var completeFrame = {
    addRoll: function () {},
    isComplete: trueFunc
  }
  var incompleteFrame = {
    addRoll: function () {},
    isComplete: falseFunc
  }
  var frameWithAScoreOf23 = {
    addRoll: function () {},
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
            var frame = [frame1, frame2][index]
            index++
            return frame
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
          return counter == 10 ? completeFrame : incompleteFrame
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
