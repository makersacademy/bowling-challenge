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

  describe("an error is thrown when an illegal move has been made", function() {

    it("a negative score gives an error message is given", function() {
      expect(function() {game.addScore(-3);
      }).toThrowError('score entered must be greater than 0');
    });
    it("a score over 10 an error message is given", function() {
      expect(function() {game.addScore(11);
        }).toThrowError('score entered can not be greater than 10');
    });
    it("if the first and second goes add up to more than 10 then then error message is given", function() {
      game.addScore(3)
      expect(function() {game.addScore(8);
      }).toThrowError('total frame score can not be greater than 10');
    });
    it("if more than 10 frames attemped with no bonus earned then an error is thrown", function() {
        var i;
        for (i = 0; i < 10; i++) {
          game.addScore(1);
          game.addScore(2);
        }
      expect(function() {game.addScore(5)}).toThrowError('Game has ended');
    });

  });

  describe("the game status tests", function() {
    it("if the game has status of 'Strike' then there is no second try and the player moves onto the next frame", function() {
      game.addScore(10)
      expect(game.gameTries.length).toEqual(1);
    });
    it("if the score is 10 then the game has status of 'Strike'", function() {
      game.addScore(10)
      expect(game.frameStatus).toEqual('Strike');
    });
    it("if the first and second scores add up to 10 then the game has status of 'Spare'", function() {
      game.addScore(3)
      game.addScore(7)
      expect(game.frameStatus).toEqual('Spare');
    });
    it("if the first and second scores don't add up to 10 then the game has status of 'Play'", function() {
      game.addScore(3)
      game.addScore(4)
      expect(game.frameStatus).toEqual('Play');
    });
    it("there are at least 10 frames in a game", function() {
      game.addScore(3)
      expect(game.gameOver).toBe(false);
    });
    it("when 10 frames have been played the game is over", function() {
      var i;
      for (i = 0; i < 10; i++) {
        game.addScore(1);
        game.addScore(2);
      }
      expect(game.gameOver).toBe(true);
    });
    it("when 10 frames have been played the game is in bonus time if the last try was a Spare", function() {
      var i;
      for (i = 0; i < 19; i++) {
        game.addScore(1);
      }
        game.addScore(9);
      expect(game.bonusTime).toBe(true);
    });
    it("when 10 frames have been played the game is in bonus time if the last try was a Strike", function() {
      var i;
      for (i = 0; i < 18; i++) {
        game.addScore(1);
      }
      game.addScore(10);
      expect(game.bonusTime).toBe(true);
    });
    it("if the game is in bonus time, there is one more frame allowed", function() {
      var i;
      for (i = 0; i < 18; i++) {
        game.addScore(1);
      }
      game.addScore(10);
      game.addScore(2);
      expect(game.gameTries.length).toEqual(11);
    });

    // it("if the bonus frame was also a Strike, there is one more frame allowed", function() {
    //   var i;
    //   for (i = 0; i < 18; i++) {
    //     game.addScore(1);
    //   }
    //   game.addScore(10);
    //   game.addScore(10);
    //   game.addScore(2);
    //   expect(game.gameTries.length).toEqual(12);
    // });
  });

  describe("the points tests", function() {
    it("the score increases by the pins downed", function() {
      game.addScore(7)
      expect(game.gameScore).toEqual(7);
    });
    it("if the first frame is a Strike,then the score is 10", function() {
      game.addScore(10);
      expect(game.gameScore).toEqual(10);
    });
    it("If the first roll is a strike then add the next 2 rolls (10+(2*3)+9*(3+3) = 70", function() {
      game.addScore(10);
      var i;
      for (i = 0; i < 18; i++) {
        game.addScore(3);
      }
      expect(game.gameScore).toEqual(70);
    });
    it("If the second roll is a strike then the total should be (8 + 10 + (8) + 8*8)  = 90", function() {
      game.addScore(4);
      game.addScore(4);
      game.addScore(10);
      var i;
      for (i = 0; i < 16; i++) {
        game.addScore(4);
      }
      expect(game.gameScore).toEqual(90);
    });
    // it("If the 10th roll is a strike then the total should be (8 + 10 + (8) + 8*8)  = 90", function() {
    //   game.addScore(2);
    //   game.addScore();
    //   game.addScore(10);
    //   var i;
    //   for (i = 0; i < 16; i++) {
    //     game.addScore(4);
    //   }
    //   expect(game.gameScore).toEqual(90);
    // });
    // it("if all 12 frames were Strikes,then the game is perfect and the score is 300", function() {
    //   var i;
    //   for (i = 0; i < 12; i++) {
    //     game.addScore(10);
    //   }
    //   expect(game.gameScore).toEqual(300);
    // });

    // it("if the second frame is a Strike,then the score is increased by 10 plus the 2 tries before hand", function() {
    //   game.addScore(3);
    //   game.addScore(7);
    //   game.addScore(10);
    //   expect(game.gameScore).toEqual(24);
    // });
    // it("if the last try was a Strike, there is one more frame allowed", function() {
    //   game.addFrame()
    //   var i;
    //   for (i = 0; i < 18; i++) {
    //     game.addScore(1);
    //   }
    //   game.addScore(10);
    //   game.addScore(2);
    //   expect(game.gameScore).toEqual(30);
    // });
  });
});
