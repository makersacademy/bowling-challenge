describe('Game', function(){
  var game;

  beforeEach(function(){
    game = new Game();
  });

  describe('play', function(){
    it('initialises the game at with the frame at 0', function(){
      expect(game.frame).toEqual(0);
    });
    it('increments the frame with each roll', function(){
      game.roll();
      expect(game.frame).toEqual(1);
    });
    it("won't allow a user to input 3 rolls unless it's the tenth frame", function(){
      game.roll(3,3,3)
      var score = game.gameScore;
      expect(score[0]).toEqual(undefined);
    });
    it("won't allow a user to input two strikes in a row unless it's the tenth frame", function(){
      game.roll(10,10)
      var score = game.gameScore;
      expect(score[0]).toEqual(undefined);
    });
  });
  describe('storing the score', function(){
    it('stores the first roll in the first array element', function(){
      game.storeScore(10,0,0);
      var score = game.gameScore;
      expect(score[0]).toEqual(10);
      expect(score[1]).toEqual(undefined);
    });
    it('stores the second roll in the second array element', function(){
      game.frame = 1;
      game.storeScore(10,0,0);
      var score = game.gameScore;
      expect(score[1]).toEqual(10);
      expect(score[2]).toEqual(undefined);
    });
    it('updates the score in the first element if there is a bonus', function(){
      game.storeScore(10,0,0);
      game.frame = 1;
      game.storeScore(10,5,0);
      var score = game.gameScore;
      expect(score[0]).toEqual(15);
      expect(score[1]).toEqual(10);
    });
    it('updates the score in the second element if there is a bonus', function(){
      game.storeScore(10,0,0);
      game.frame = 1;
      game.storeScore(10,10,0);
      game.frame = 2;
      game.storeScore(1,3,2);
      var score = game.gameScore;
      expect(score[0]).toEqual(22);
      expect(score[1]).toEqual(13);
      expect(score[2]).toEqual(1);
    });
  });
  describe('scoring correctly', function(){
    it('returns a score of 300 for ten strikes', function(){
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10);
      game.roll(10,10,10);
      var score = game.gameScore.reduce((a,b) => a + b, 0);
      expect(score).toEqual(300);
    });
    it('returns a score of 184 for ten spares', function(){
      game.roll(8, 2);
      game.roll(8, 2);
      game.roll(8, 2);
      game.roll(8, 2);
      game.roll(8, 2);
      game.roll(8, 2);
      game.roll(8, 2);
      game.roll(8, 2);
      game.roll(8, 2);
      game.roll(8, 2, 10);
      var score = game.gameScore.reduce((a,b) => a + b, 0);
      expect(score).toEqual(182);
    });
    it('returns a score of 115 for a game including spares and strikes', function(){
      game.roll(3, 3);
      game.roll(10);
      game.roll(6, 1);
      game.roll(6, 1);
      game.roll(3, 7);
      game.roll(5, 5);
      game.roll(8, 2);
      game.roll(5, 4);
      game.roll(3, 5);
      game.roll(9, 1, 3);
      var score = game.gameScore.reduce((a,b) => a + b, 0);
      expect(score).toEqual(115);
    });
    it('returns a score of 107 for a game including spares', function(){
      game.roll(6, 1);
      game.roll(9, 1);
      game.roll(0, 10);
      game.roll(9, 1);
      game.roll(9, 1);
      game.roll(2, 7);
      game.roll(2, 5);
      game.roll(6, 1);
      game.roll(8, 1);
      game.roll(3, 5, 0);
      var score = game.gameScore.reduce((a,b) => a + b, 0);
      expect(score).toEqual(107);
    });
  });


});
