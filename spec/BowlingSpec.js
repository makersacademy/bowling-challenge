describe("The Bowling Score Card", function() {

  beforeEach(function() {
    game = new Bowling();
  });

  it("a new game has a score of 0", function() {
    expect(game.gameScore).toEqual(0);
  });
  it("a new game has a status of 'Play'", function() {
    expect(game.frameStatus).toEqual('Play');
  });

  describe("when a try has been taken", function() {
    it("the score increases by the pins downed", function() {
      game.addFrame()
      game.addScore(7)
      expect(game.gameScore).toEqual(7);
    });
    it("a score over 10 an error message is given", function() {
      game.addFrame()
      expect(function() {game.addScore(11);
        }).toThrowError('score entered can not be greater than 10');
    });
    it("if the score is 10 then the game has status of 'Strike'", function() {
      game.addFrame()
      game.addScore(10)
      expect(game.frameStatus).toEqual('Strike');
    });
    it("if the first and second goes add up to 10 then the game has status of 'Spare'", function() {
      game.addFrame()
      game.addScore(3)
      game.addScore(7)
      expect(game.frameStatus).toEqual('Spare');
    });
    it("if the first and second goes don't add up to 10 then the game has status of 'Play'", function() {
      game.addFrame()
      game.addScore(3)
      game.addScore(4)
      expect(game.frameStatus).toEqual('Play');
    });
    it("if the first and second goes add up to more than 10 then tan error message is given", function() {
      game.addFrame()
      game.addScore(3)
      expect(function() {game.addScore(8);
      }).toThrowError('total frame score can not be greater than 10');
    });
  });
});
