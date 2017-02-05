describe("Bowling Game", function(){
  var game

  beforeEach(function(){
    game = new Game();
  });

  describe("New games", function(){
    it("Begins with an scorecard", function(){
      expect(game._rolls).toEqual([]);
    });

    it("Can reset scorecard to begin a new game", function(){
      for( var i = 0; i < 20; i++){
        game.roll(3)
      };
      game.resetGame()
      expect(game._rolls).toEqual([]);
    });
  });

  describe("Playing the game", function(){
    it("Inserts score from each game into rolls array", function(){
      game.roll(4)
      expect(game._rolls.length).toEqual(1);
    });

    it("Current Roll counter increments after each roll", function(){
      game.roll(4)
      expect(game._currentRoll).toEqual(1);
    });
  });

  describe("A normal game", function(){
    it("Calculates total score for a normal game with no strikes", function(){
        game.roll(3);
        game.roll(6);
        for( var i = 0; i < 10; i++){
          game.roll(2)
        };
        for( var i = 0; i < 8; i++){
            game.roll(7)
          };
        game.calculateFrameScores();
        expect(game._totalScore).toEqual(85);
    });

    it("Calculates total score for a normal game with a mix of results", function(){
      game.roll(10);
      game.roll(5);
      game.roll(5);
      for( var i = 0; i < 16; i++){
        game.roll(3)
      };
      game.calculateFrameScores();
      expect(game._totalScore).toEqual(81);
    });
  });

  describe("Strikes", function(){
    it("Calculates bonus scores for a perfect game", function(){
      for( var i = 0; i < 12; i++){
        game.roll(10)
      };
      game.calculateFrameScores()
      expect(game._totalScore).toEqual(300);
    });

    it("Calculates total score for a normal game with a strike at the end", function(){
      game.roll(10);
      for( var i = 0; i < 16; i++){
        game.roll(3)
      };
      game.roll(10);
      game.roll(3);
      game.calculateFrameScores();
      expect(game._totalScore).toEqual(77);
    });
  });

  describe("Spare", function(){
    it("Calculates bonus scores for a game of spares", function(){
      for( var i = 0; i < 21; i++){
        game.roll(5)
      };
      game.calculateFrameScores()
      expect(game._totalScore).toEqual(150);
    });

    it("Calculates total score for a normal game with a spare at the end", function(){
      game.roll(10);
      for( var i = 0; i < 16; i++){
        game.roll(3)
      };
      game.roll(5);
      game.roll(5);
      game.roll(3);
      game.calculateFrameScores();
      expect(game._totalScore).toEqual(77);
    });
  });


  describe("Gutter Game", function(){
    it("Scores no points in entire game", function(){
      for( var i = 0; i < 20; i++){
        game.roll(0)
      };
      game.calculateFrameScores()
      expect(game._totalScore).toEqual(0);
    });
  });

});
