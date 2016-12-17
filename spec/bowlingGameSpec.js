describe("Bowling Game", function() {
  var game;
  beforeEach(function() {
    game = new BowlingGame();
    pins = jasmine.createSpyObj('pins', ['attemptBall'])
    frame = jasmine.createSpyObj('frame',['resetFrame'])
  })

  describe("a new game", function() {

    it("should start the game on 0 points", function() {
      expect(game.totalScore).toEqual(0);
    })
  })

  describe("playing a game", function() {

    it("calls the attempt ball method", function() {
      game.playBall();
      expect(pins.attemptBall).toHaveBeenCalled()
    })

  })

  describe("restarting the game", function() {
    it("calls reset frames", function() {
      game.startAgain();
      expect(frame.resetFrame).toHaveBeenCalled()
    })
  })
})
