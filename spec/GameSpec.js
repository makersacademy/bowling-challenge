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

  describe('Scoring a strike',function(){
    it('in round 1', function(){
      game.roll(10);
      expect(game.rounds[0]).toEqual({frame: 1, round: 2, score: 10});
    });
  });

  describe('Scoring a strike changes to new frame',function(){
    it('in round 1', function(){
      game.roll(10);
      expect(game.rounds[1]).toEqual({frame: 2, round: 1, score: 0});
    });
  });

  // describe('Round updates when score is calculated',function(){
  //   it('round 1 to round 2', function(){
  //     game.roll(5);
  //     expect(game.rounds[0]).toEqual({frame: 1, round: 2, score: 5});
  //   });
  // });
  //
  // describe('After two rounds, a new frame should start',function(){
  //   it('after 2 rounds', function(){
  //     game.roll(5);
  //     game.roll(4);
  //     expect(game.rounds[0]).toEqual({frame: 2, round: 1, score: 0});
  //   });
  // });
});
