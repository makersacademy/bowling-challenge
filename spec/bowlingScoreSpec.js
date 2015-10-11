describe('BowlingScore', function() {
  var game = new BowlingScore();

  describe('#addNewRollScore', function() {
    it('correctly pushes first frame into raw score array', function() {
      game.addNewRollScore(6);
      game.addNewRollScore(3);
      expect(game.rawScores).toEqual([6, 3]);
    });

    it('correctly pushes second frame into raw score array', function() {
      game.addNewRollScore(7);
      game.addNewRollScore(2);
      game.addNewRollScore(4);
      game.addNewRollScore(5);
      expect(game.rawScores).toEqual([6, 3, 7, 2, 4, 5]);
    });

    it('correctly pushes strike into raw score array', function() {
      game.addNewRollScore(10);
      expect(game.rawScores).toEqual([6, 3, 7, 2, 4, 5, 10, null]);
    });
  });

  describe('#makeFrameScores', function() {
    it('restructures rawScores into frameScores', function() {
      game.makeFrameScores();
      expect(game.frameScores).toEqual([[6, 3], [7, 2], [4, 5], [10, null]]);
    });
  });

  describe('#makeRoundScores', function() {
    it('calculates roundScores by adding frameScores to bonusScores', function() {
      game.addNewRollScore(8);
      game.addNewRollScore(1);
      game.makeFrameScores();
      game.addNewBonusScore();
      game.makeRoundScores();
      expect(game.roundScores).toEqual([[9], [9], [9], [19], [9]]);
    });
  });

  describe('#makeGameScore', function() {
    it('calculates gameScore by totalling roundScores', function() {
      game.makeGameScore();
      expect(game.gameScore).toEqual([55]);
    });
  });

});

describe('Bonus Points', function() {

  describe('spare', function() {
    var game = new BowlingScore();
    it('adds the points from the next roll', function() {
      game.rawScores = [9, 1, 2, 4];
      game.addNewBonusScore();
      expect(game.bonusScores).toEqual([2, 0]);
    });
  });

  describe('strike', function() {
    var game = new BowlingScore();
    it('adds the sum of the points from the next two rolls', function() {
      game.rawScores = [10, null, 2, 5];
      game.addNewBonusScore();
      expect(game.bonusScores).toEqual([7, 0]);
    });
  });

  describe('neither spare nor strike', function() {
    var game = new BowlingScore();
    it('adds 0 to the bonus points score', function() {
      game.rawScores = [3, 2, 1, 4];
      game.addNewBonusScore();
      expect(game.bonusScores).toEqual([0, 0]);
    });
  });

});

//
// // a frame is made of two rolls
// describe('frame', function() {
//
//   describe('first roll', function() {
//     xit('must be less than 10', function() {
//       expect;
//     });
//   });
//
//   describe('second roll', function() {
//     xit('must be less than 10-firstThrow', function() {
//       expect;
//     });
//   });
//
// });
//
// // a strike is when all ten pins are knocked down on the first roll
// describe('strike', function() {
//
//   xit('', function() {
//     expect;
//   });
//
// });
//
// // a spare is when all ten pins are knocked down on the second roll
// describe('spare', function() {
//
//   xit('', function() {
//     expect;
//   });
//
// });
