describe("Bowling", function() {
  beforeEach(function(){
		game = new BowlingGame();
	});

  describe("Game Logic", function (){


    it("the game should start with a score of 0", function() {
      expect(game.score).toEqual(0)
    });

    it("should be able to produce a Gutter Game", function() {
      game.generateFrames(0,20)
      game.calculateScore()
      expect(game.score).toEqual(0)
    });

    it("should actually count the score after 10 frames (no spare/strikes)", function() {
      game.generateFrames(4,20)
      game.calculateScore()
      expect(game.score).toEqual(80)
    });

    it("Spares should be counted correctly", function() {
      // game.frames = [[9,1],[5,2]]
      game.roll(9)
      game.roll(1)
      game.roll(5)
      game.roll(2)
      game.generateFrames(0,16)
      game.calculateScore()
      expect(game.score).toEqual(22)
    });

    it("Strikes should be counted correctly", function() {
      // game.frames = [[9,1],[5,2]]
      game.roll(10)
      game.roll(5)
      game.roll(2)
      game.generateFrames(0,16)
      game.calculateScore()
      expect(game.score).toEqual(24)
    });

    it("can roll a perfect game, 300", function() {
      // game.frames = [[9,1],[5,2]]
      game.generateFrames(10,12)
      game.calculateScore()
      expect(game.score).toEqual(300)
    });

    it("should be able to reset the score back to 0", function() {
      game.generateFrames(9,20)
      game.resetGame()
      expect(game.score).toEqual(0)
    })
  });

  describe("Edge Cases", function (){

    it("can't roll a number higher than 10", function() {
      var message = "You can not hit more than 10 pins in one roll"
      expect(function(){
        game.roll(11)
      }).toThrowError(message)
    });

  });


});
