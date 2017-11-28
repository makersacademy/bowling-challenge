describe('Bowling', function(){
  var game;

  beforeEach(function(){
    game = new Game();
    game.addFrame();
  });

  describe('Start a new game', function(){
    it('starts a game with a frame and turn', function(){
      expect(game.currentGame()).toEqual({frame: 1, round: 1, score: 0})
    });
  });

  describe('Scoring points',function(){
    it('in round 1', function(){
      game.roll(5);
      expect(game.rounds[0]).toEqual({frame: 1, round: 1, score: 5});
    });
  });
});
