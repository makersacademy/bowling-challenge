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
    it("a negative score gives an error message is given", function() {
      game.addFrame()
      expect(function() {game.addScore(-3);
      }).toThrowError('score entered must be greater than 0');
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
    it("if the game has status of 'Strike' then there is no second try and the player moves onto the next frame", function() {
      game.addFrame()
      game.addScore(10)
      expect(game.gameTries.length).toEqual(1);
    });
    it("if the first and second scores add up to 10 then the game has status of 'Spare'", function() {
      game.addFrame()
      game.addScore(3)
      game.addScore(7)
      expect(game.frameStatus).toEqual('Spare');
    });
    it("if the first and second scores don't add up to 10 then the game has status of 'Play'", function() {
      game.addFrame()
      game.addScore(3)
      game.addScore(4)
      expect(game.frameStatus).toEqual('Play');
    });
    it("if the first and second goes add up to more than 10 then then error message is given", function() {
      game.addFrame()
      game.addScore(3)
      expect(function() {game.addScore(8);
      }).toThrowError('total frame score can not be greater than 10');
    });
  });

  describe("the whole game tests", function() {
    it("there are at least 10 frames in a game", function() {
      game.addFrame()
      game.addScore(3)
      expect(game.gameOver).toBe(false);
      });
    it("when 10 frames have been played the game is over if the last try was not a Strike", function() {
      game.addFrame()
      var i;
      for (i = 0; i < 11; i++) {
        game.addScore(1);
        game.addScore(2);
      }
      expect(game.gameOver).toBe(true);
    });
    it("if the last try was a Strike, the game is not over", function() {
      game.addFrame()
      var i;
      for (i = 0; i < 18; i++) {
        game.addScore(1);
      }
      game.addScore(10);
      expect(game.gameOver).toBe(false);
    });
    it("if the last try was a Strike, there is one more frame allowed", function() {
      game.addFrame()
      var i;
      for (i = 0; i < 18; i++) {
        game.addScore(1);
      }
      game.addScore(10);
      game.addScore(2);
      expect(game.gameScore).toEqual(30);
    });
    it("if the bonus frame was also a Strike, there is one more frame allowed", function() {
      game.addFrame()
      var i;
      for (i = 0; i < 18; i++) {
        game.addScore(1);
      }
      game.addScore(10);
      game.addScore(10);
      game.addScore(2);
      expect(game.gameScore).toEqual(40);
    });
    it("if all 12 frames were Strikes,then the game is perfect and the score is 300", function() {
      game.addFrame()
      var i;
      for (i = 0; i < 12; i++) {
        game.addScore(10);
      }
      expect(game.gameScore).toEqual(300);
    });
  });
});
