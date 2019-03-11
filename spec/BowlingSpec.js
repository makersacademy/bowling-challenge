describe("The Bowling Score Card", function() {

  beforeEach(function() {
    game = new Bowling();
    frame = new Frame();
  });

  describe("Error handling tests", function() {

    it("an attempt to enter negative score generates an error message", function() {
      expect(function() {game.addScore(-3);
      }).toThrowError('score entered must be greater than 0');
    });
    it("an attempt to enter a score over 10 generates an error message", function() {
      expect(function() {game.addScore(11);
        }).toThrowError('score entered can not be greater than 10');
    });
    it("if the first and second scores in a frame add up to more than 10, then then error message is given", function() {
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

  describe("Frame status tests", function() {

    it("if the first and second scores don't add up to 10 then the game has status of 'Open'", function() {
      frame.firstScore = 3
      frame.secondScore = 4
      frame.setStatus()
      expect(frame.frameStatus).toEqual('Open');
    });
    it("if the first and second scores add up to 10 then the game has status of 'Spare'", function() {
      frame.firstScore = 3
      frame.secondScore = 7
      frame.setStatus()
      expect(frame.frameStatus).toEqual('Spare');
    });
    it("if the score is 10 then the game has status of 'Strike'", function() {
      frame.firstScore = 10
      frame.setStatus()
      expect(frame.frameStatus).toEqual('Strike');
    });
  });

  describe("Game status tests", function() {

    it("if the frame has status of 'Strike' then there is no second try and the player moves onto the next frame", function() {
      game.addScore(10)
      expect(game.gameFrames.length).toEqual(1);
    });
    it("the game is not over until at least 10 frames have been played", function() {
      game.addScore(3)
      expect(game.gameOver).toBe(false);
    });
    it("when 10 frames have been played the game is over, if no bonus time has been won", function() {
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
  });

  describe("Score calculation tests", function() {

    // The basic game
    it("in the first frame the overall score is the scores combined", function() {
      game.addScore(7)
      game.addScore(2)
      expect(game.gameScore).toEqual(9);
    });
    it("if the first frame is a Strike,then the score is 10", function() {
      game.addScore(10);
      expect(game.gameScore).toEqual(10);
    });
    it("the score is the cumulative total of all the scores combined", function() {
      game.addScore(7)
      game.addScore(2)
      game.addScore(1)
      game.addScore(5)
      expect(game.gameScore).toEqual(15);
    });
    // Spare
    it("If the first roll is a spare then the total score should include the next 2 rolls. Note: (10+(3)+9*(3+3) = 67", function() {
      game.addScore(8);
      game.addScore(2);
      var i;
      for (i = 0; i < 18; i++) {
        game.addScore(3);
      }
      expect(game.gameScore).toEqual(67);
    });
    it("If the second roll is a spare then the total score should include the next 2 rolls. Note: (8 + 10 + (4) + 8*8)  = 86", function() {
      game.addScore(4);
      game.addScore(4);
      game.addScore(8);
      game.addScore(2);
      var i;
      for (i = 0; i < 16; i++) {
        game.addScore(4);
      }
      expect(game.gameScore).toEqual(86);
    });
    it("If the second roll and 4th are spare's then the total score should include the next 2 rolls for each. Note: (3+10+(7+3)+10+(2+1)+(5*2))=38", function() {
      game.addScore(1);
      game.addScore(2);
      game.addScore(8);
      game.addScore(2);
      game.addScore(3);
      game.addScore(4);
      game.addScore(8);
      game.addScore(2);
      var i;
      for (i = 0; i < 6; i++) {
        game.addScore(1);
        game.addScore(1);
      }
      expect(game.gameScore).toEqual(46);
    });

    it("if the last frame is a spare then there should be a bonus try. Note: (1*2*9)+10+2 = 30", function() {
      var i;
      for (i = 0; i < 18; i++) {
        game.addScore(1);
      }
      game.addScore(7);
      game.addScore(3);
      game.addScore(2);
      expect(game.gameScore).toEqual(30);
    });

    // Strikes
    it("If the first roll is a strike then the total score should include the next 2 rolls. Note: (10+(2*3)+9*(3+3) = 70", function() {
      game.addScore(10);
      var i;
      for (i = 0; i < 18; i++) {
        game.addScore(3);
      }
      expect(game.gameScore).toEqual(70);
    });
    it("If the second roll is a strike then the total score should include the next 2 rolls. Note: (8 + 10 + (8) + 8*8)  = 90", function() {
      game.addScore(4);
      game.addScore(4);
      game.addScore(10);
      var i;
      for (i = 0; i < 16; i++) {
        game.addScore(4);
      }
      expect(game.gameScore).toEqual(90);
    });
    it("if the last frame is a strike then there should be a bonus frame. Note: (1*2*9)+10+2 = 30", function() {
      var i;
      for (i = 0; i < 18; i++) {
        game.addScore(1);
      }
      game.addScore(10);
      game.addScore(2);
      expect(game.gameScore).toEqual(30);
    });
    it("if the every frame is a strike then this is a perfect game. Note: 10*(10+10+10) = 300", function() {
      var i;
      for (i = 0; i < 12; i++) {
        game.addScore(10);
      }
      expect(game.gameScore).toEqual(300);
    });
    // Combinations
    it("If the first roll is a spare and the second roll is a strike then the total score should include the strike and the next 2 rolls. Note: (10+10) + (10+8) + (8*8)  = 102", function() {
      game.addScore(4);
      game.addScore(6);
      game.addScore(10);
      var i;
      for (i = 0; i < 16; i++) {
        game.addScore(4);
      }
      expect(game.gameScore).toEqual(102);
    });
    it("If the first roll is a strike and the second roll is a spare then the total score should include the strike and the next 2 rolls. Note: (10+10) + (10+4) + (8*8)  = 98", function() {
      game.addScore(10);
      game.addScore(4);
      game.addScore(6);
      var i;
      for (i = 0; i < 16; i++) {
        game.addScore(4);
      }
      expect(game.gameScore).toEqual(98);
    });
  });
});
