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
  });

  describe('#calculateStrikeScore', function(){
    it('can calculate a strike score where next roll is not another strike', function() {
      game4.calculateStrikeScore();
      expect(game4.strikeScore).toEqual(7);
    });

    it('can add up the strike score when next roll is also a strike', function() {
      console.log(game5.strikeScore);
      console.log(game5);
      game5.calculateStrikeScore();
      console.log(game5);
      console.log(game5.strikeScore);
      expect(game5.strikeScore).toEqual(24);
    });
  });

    describe('#calculateTotalScore', function(){
      it('can add up the basic and spare score of game', function() {
        game3.calculateTotalScore();
        expect(game3.totalScore).toEqual(45);
      });
    });

    describe('#calculateTotalScore', function(){
      it('can add up the basic, spare and strike score of game', function() {
        game5.calculateTotalScore();
        expect(game5.totalScore).toEqual(65);
      });
    });

});
