describe("Bowling Game", function() {
  var game;
  beforeEach(function() {
    game = new BowlingGame();
    frame = jasmine.createSpyObj('frame',['moveToNextFrame'])
    pins = jasmine.createSpyObj('pins', ['attemptBall'])
  })

  describe("a new game", function() {

    it("should start the game on 0 points", function() {
      expect(game.currentTotal).toEqual(0);
    })
  })

  describe("playing a game", function() {

    it("Each game has two turns before moving to the next frame", function(){
      game.playBall();
      expect(frame.moveToNextFrame).not.toHaveBeenCalled()
    })

    it("calls the attempt ball method", function() {
      game.playBall();
      expect(pins.attemptBall).toHaveBeenCalled()
    })

    it("moves to the next frame after two plays", function() {
      game.playBall();
      game.playBall();
      expect(frame.moveToNextFrame).toHaveBeenCalled()
    })

    it("Goes back to the first turn at the start of the new frame", function(){
      game.playBall();
      game.playBall();
      expect(game.firstTurn).toEqual(true)
    })

    it("first go returns a random number between 0 and 10", function() {
      score = game.playBall()
      expect(score >= 0 && score <= 10).toEqual(true);
    })

    it("the score updates the current total", function() {
      score = game.playBall();
      expect(game.currentTotal).toEqual(score)
    })

  })
})
