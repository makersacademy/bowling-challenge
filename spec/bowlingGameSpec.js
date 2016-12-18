describe("Bowling Game", function() {
  var game;
  beforeEach(function() {
    game = new BowlingGame();
    pins = jasmine.createSpyObj('pins', ['','rollBall','getRandomInt','getRandomIntForSecondAttempt'])
    frame = jasmine.createSpyObj('this.frame',['resetFrame'])
  })

  describe("a new game", function() {

    it("should start the game on 0 points", function() {
      expect(game.totalScore).toEqual(0);
    })
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
        pins.getRandomInt.and.returnValue(7)
        pins.getRandomIntForSecondAttempt.and.returnValue(2)
      })

      it("adds the sum of two attempts to the score", function() {
        game.playBall();
        game.playBall();
        expect(game.totalScore).toEqual(9)
      })
    })
  })
})
