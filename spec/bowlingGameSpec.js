describe("Bowling Game", function() {
  var game;
  beforeEach(function() {
    game = new BowlingGame();
    pins = jasmine.createSpyObj('pins', ['rollBall','getRandomInt','getRandomIntForSecondAttempt'])
    frame = jasmine.createSpyObj('this.frame',['resetFrame'])
  })

  describe("a new game", function() {

    it("should start the game on 0 points", function() {
      expect(game.totalScore).toEqual(0);
    })

    it("should be able to display know the current frame", function() {
      expect(game.currentFrame).toBeDefined()
    })

    it("current frame should start on 1 for a new game", function() {
      expect(game.currentFrame()).toEqual(1)
    })
  })

  describe("playing during the game", function() {

  })

  describe("restarting the game", function() {
    it("calls reset frames", function() {
      game.startAgain();
      expect(frame.resetFrame).toHaveBeenCalled()
    })
  })

  describe("calculating the score", function(){

    describe("for two rolls without a strike or spare", function() {

      beforeEach(function() {
        spyOn(game.pins, 'getRandomInt').and.returnValue(7)
        spyOn(game.pins, 'getRandomIntForSecondAttempt').and.returnValue(2)
      })

      it("adds the sum of two attempts to the score", function() {
        game.playBall();
        game.playBall();
        expect(game.totalScore).toEqual(9)
      })
    })
  })
})
