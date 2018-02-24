describe('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game();
    game.allFrames = [[4,5],[5,4]];
    game2 = new Game();
    game2.allFrames = [[4,5],[5,4],[4,6],[3,5]];
  });

  describe('#calculateBaseScore', function(){
    it('can add up the basic score of a 2, 2 roll frames', function() {
      game.calculateBaseScore();
      expect(game.currentBaseScore).toEqual(18);
    });
  });

  describe('#calculateSpareScore', function() {
    it('can calculate the bonus score of spares over 4 frames', function() {
      game2.calculateSpareScore();
      expect(game2.currentSpareScore).toEqual(3);
    });
  });

});
