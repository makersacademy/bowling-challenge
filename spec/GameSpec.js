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

  describe('Adds score to the frame', function(){
    it('rolls a five in the first round, changes the round', function(){
      game.roll(5);
      expect(game.currentGame()).toEqual({frame: 1, round: 2, score: 5})
    });
  });

  describe('After two rounds, points are added up', function(){
    it('rolls a 3 in th second round, points are added up', function(){
      game.roll(5);
      game.roll(3);
      expect(game.rounds[0]).toEqual({frame: 1, round: 2, score: 8})
    });
  });

  describe('After two rounds, a new frame should be added', function(){
    it('after two rounds, a frame is added', function(){
      game.roll(5);
      game.roll(3);
      expect(game.currentGame()).toEqual({frame: 2, round: 1, score: 8})
    });
  });

  describe('If one roll is a strike(ten), turn is skipped', function(){
    it('a strike is rolled', function(){
      game.roll(10);
      expect(game.rounds[0]).toEqual({frame: 1, round: 2, score: 10})
    });
  });

  describe('If one roll is a strike(ten), frame is changed', function(){
    it('a strike is rolled', function(){
      game.roll(10);
      expect(game.currentGame()).toEqual({frame: 2, round: 1, score: 20})
    });
  });

  // describe('If one roll is a strike(ten), 10 points are added ontop of a bonus from the next round', function(){
  //   it('a strike is rolled', function(){
  //     game.roll(10);
  //     game.roll(1);
  //     game.roll(3)
  //     expect(game.rounds[1]).toEqual({frame: 2, round: 2, score: 24})
  //   });
  // });
  //
  // describe('If one roll is a strike(ten), 10 points are added ontop of a bonus from the next round', function(){
  //   it('a strike is rolled', function(){
  //     game.roll(10);
  //     game.roll(1);
  //     game.roll(3)
  //     expect(game.currentGame()).toEqual({frame: 3, round: 1, score: 24})
  //   });
  // });
  //
  // describe('I dont roll a strike on my next turn so it will just add the points', function(){
  //   it('a strike is rolled', function(){
  //     game.roll(10);
  //     game.roll(1);
  //     game.roll(3);
  //     expect(game.currentGame()).toEqual({frame: 3, round: 1, score: 27})
  //   });
  // });
  //
  //
  //   describe('Points of rounds is totaled up', function(){
  //     it('two rounds are rolled', function(){
  //       game.roll(5);
  //       game.roll(4);
  //       game.roll(6);
  //       expect(game.totalScore()).toEqual(15)
  //     });
  //   });


});
