describe('Bowling', function(){
  var game;

  beforeEach(function(){
    game = new Game();
    game.addFrame();
  });

  describe('Start a new game', function(){
    it('starts a game with a frame and turn', function(){
      expect(game.currentGame()).toEqual({frame: 1, round: 0, score: 0})
    });
  });

  describe('Adds score to the frame', function(){
    it('rolls a five in the first round, changes the round', function(){
      game.roll(5);
      expect(game.currentGame()).toEqual({frame: 1, round: 1, score: 5})
    });
  });

  describe('After two rounds, points are added up', function(){
    it('rolls a 3 in th second round, points are added up', function(){
      game.roll(5);
      game.roll(3);
      expect(game.rounds[0]).toEqual({frame: 1, round: 2, score: 8})
    });
  });

  describe('You can play a gutter game', function(){
    it('if player really sucks and cannot bowl for his life', function(){
      for (var i = 0; i < 29; i++){
        game.roll(0)
      }
      expect(game.currentGame()).toEqual({frame: 10, round: 2, score: 0})
    });
  });


  describe('When turn is 2, you then will be added to another frame', function(){
    it('When you have past one frame and in the second frame, after one turn', function(){
      game.roll(5);
      game.roll(3);
      game.roll(4);
      expect(game.currentGame()).toEqual({frame: 2, round: 0, score: 12})
    });
  });

  describe('If one roll is a strike(ten), turn is skipped', function(){
    it('a strike is rolled', function(){
      game.roll(10);
      expect(game.rounds[0]).toEqual({frame: 1, round: 2, score: 10})
      expect(game.currentGame()).toEqual({frame: 2, round: 1, score: 20})
    });
  });

  // describe('If one roll is a strike(ten), frame is changed with plus ten from a strike', function(){
  //   it('a strike is rolled', function(){
  //     game.roll(10);
  //     game.roll(1);
  //     expect(game.currentGame()).toEqual({frame: 2, round: 2, score: 22})
  //   });
  // });

});
