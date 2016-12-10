describe("Bowling Game", function() {
  var game;
  beforeEach(function() {
    game = new BowlingGame();
    score = jasmine.createSpyObj('score',['currentScore','addToScore'])
  })

  describe("a new game", function() {

    it("should start the game on 0 points", function() {
      expect(game.currentTotal).toEqual(0);
    })
  })

  describe("playing a game", function() {
  })

})
