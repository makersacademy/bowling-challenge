describe("Bowling Game", function() {
  var game;
  beforeEach(function() {
    game = new BowlingGame();
    frame = jasmine.createSpyObj('frame',['moveToNextFrame'])
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

    it("moves to the next frame after two plays", function() {
      game.playBall();
      game.playBall();
      expect(frame.moveToNextFrame).toHaveBeenCalled()
    })
  })


})
