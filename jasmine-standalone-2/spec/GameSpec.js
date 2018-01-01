describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("#roll", function() {
    it("should increase the score", function() {
      game.roll(3);
      expect(game.score()).toEqual(3);
      game.roll(6);
      expect(game.score()).toEqual(9);
    });
    
  });

  describe("#score", function() {
    it("should add up the score of a whole game", function() {
      rollPerfectGame(game);

      expect(game.score()).toEqual(300);
    });
  });

  describe("#isFinished", function() {
    it("should return whether the game is finished or not", function(){
      
      expect(game.isFinished()).toEqual(false);

      rollPerfectGame(game);

      expect(game.isFinished()).toEqual(true);
    });   
  });

  describe("#checkRollIsValid", function() {
    it("should throw an error if the game is finished", function() {
      rollPerfectGame(game);
      expect(function(){ game.roll(4) }).toThrowError("Game Finished: can't roll")
    });
    it("should throw an error if the roll is not a number", function() {
      expect(function(){ game.roll("a") }).toThrowError("Invalid Roll");
    });
    it("should throw an error if the roll is over 10", function() {
      expect(function(){ game.roll(11) }).toThrowError("Invalid Roll");
    });
    it("should throw an error if the roll is more than the pins standing", function() {
      game.roll(5)
      //console.log(game.frames.last())
      expect(function(){ game.roll(6) }).toThrowError("Invalid Roll");
    });
  });
});
