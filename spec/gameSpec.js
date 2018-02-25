describe('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game();
    game.allFrames = [[4,5],[5,4]];
    game2 = new Game();
    game2.allFrames = [[4,5],[5,4],[4,6],[3,5]];
    game3 = new Game();
    game3.allFrames = [[5,5],[5,4],[4,6],[3,5]];
    game4 = new Game();
    game4.allFrames = [[5,3],[10,0],[4,3],[3,5]];
    game5 = new Game();
    game5.allFrames = [[10,0],[10,0],[4,6],[3,5]];
    game6 = new Game();
    game6.allFrames = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1]];
    game7 = new Game();
    game7.allFrames = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[10,0],[1,1]];
    game8 = new Game();
    game8.allFrames = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[10,0],[10,1,5]];
    game9 = new Game();
    game9.allFrames = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[4,6,5]];
    game10 = new Game();
    game10.allFrames = [[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[1,1],[10,0,5]];
    game11 = new Game();
    game11.allFrames = [[1,0],[4,6],[1,0],[4,6]];
    game12 = new Game();
    game12.allFrames = [[10,0],[4,6],[1,0],[10,0]];
    game13 = new Game();
    game13.allFrames = [[10,0],[4,6],[1,0],[10,0],[10,0]];
  });

  describe('#calculateBaseScore', function(){
    it('can add up the basic score of a 2, 2 roll frames', function() {
      game.calculateBaseScore();
      expect(game.baseScore).toEqual(18);
    });
  });

  describe('#calculateSpareScore', function() {
    it('can calculate the bonus score of spares over 4 frames', function() {
      game2.calculateSpareScore();
      expect(game2.spareScore).toEqual(3);
    });

    it('can calculate the bonus score of spares over 4 frames', function() {
      game3.calculateSpareScore();
      expect(game3.spareScore).toEqual(8);
    });

    it('can handle scoring a spare when the next turn has not happened yet', function() {
      game11.calculateSpareScore();
      expect(game11.spareScore).toEqual(1);
    });
  });

  // describe('#calculateStrikeScore', function(){
  //   it('can calculate a strike score where next roll is not another strike', function() {
  //     game4.calculateStrikeScore();
  //     expect(game4.strikeScore).toEqual(7);
  //   });
  //
  //   it('can add up the strike score when next roll is also a strike', function() {
  //     game5.calculateStrikeScore();
  //     expect(game5.strikeScore).toEqual(24);
  //   });
  //
  //   it('can handle scoring a strike when next turn as not happened yet', function() {
  //     game12.calculateStrikeScore();
  //     expect(game12.strikeScore).toEqual(10);
  //   });
  //
  //   it('can handle scoring a 2 * strike when turn after next not happened yet', function() {
  //     game13.calculateStrikeScore();
  //     expect(game13.strikeScore).toEqual(10);
  //   });
  // });
  //
  //   describe('#calculateTotalScore', function(){
  //     it('can add up the basic and spare score of game', function() {
  //       game3.calculateTotalScore();
  //       expect(game3.totalScore).toEqual(45);
  //     });
  //
  //     it('can add up the basic, spare and strike score of game', function() {
  //       game5.calculateTotalScore();
  //       expect(game5.totalScore).toEqual(65);
  //     });
  //   });
  //
  //   describe('#calculates 10 frame game correctly - no bonus scoring for 10th frame', function(){
  //     it('can add up a 10th frame score with no spare or strike', function() {
  //       game6.calculateTotalScore();
  //       expect(game6.totalScore).toEqual(20);
  //     });
  //     it('can add up a 10th frame score with a strike in the 9th frame', function() {
  //       game7.calculateTotalScore();
  //       expect(game7.totalScore).toEqual(30);
  //     });
  //     it('can add up a 10th frame score with a stike in the 9th and 10th frame', function() {
  //       game8.calculateTotalScore();
  //       expect(game8.totalScore).toEqual(53);
  //     });
  //     it('can add up a 10th frame score with a spare in the 10th frame', function() {
  //       game9.calculateTotalScore();
  //       expect(game9.totalScore).toEqual(33);
  //     });
  //     it('can add up a 10th frame score with a strike in the 10th frame only', function() {
  //       game10.calculateTotalScore();
  //       expect(game10.totalScore).toEqual(33);
  //     });
  //   });

    describe('#calculateDoubleStrikeScore', function() {
      it('can calculate the bonus score of spare for previous frame', function() {
        game5.calculateDoubleStrikeScore();
        expect(game5.doubleStrikeScore).toEqual(14);
      });
    });

    describe('#calculateSingleStrikeScore', function() {
      it('can calculate the bonus score of spare for previous frame', function() {
        game4.calculateSingleStrikeScore();
        expect(game4.singleStrikeScore).toEqual(7);
      });
    });

});
