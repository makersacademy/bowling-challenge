describe('Game', function(){

  var game;

  beforeEach(function(){
    game = new Game();
    game.allFrames = [4,5];
  });

  describe('#calculateScore', function(){
    it('can add up the basic score of a 2 roll frame', function() {
      game.calculateScore();
      expect(game.currentScore).toEqual(9);
    });
  });

});
