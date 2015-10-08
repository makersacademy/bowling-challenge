describe('Game', function (){
  var game;

  beforeEach(function(){
    game = new Game;
  });

  describe('Initializing', function(){
    it('initiated on the first frame', function(){
      expect(game.frame).toBe(1)
    });

    it('initiated with a score of 0', function(){
      expect(game.score).toBe(0)
    });
  });

  describe('#updateScore', function(){

    player = {downedPins: function() {
                return 8 }
             };

    it('updates score based on players downed pins', function(){
      game.updateScore(player);
      expect(game.score).toBe(8)
    });
  });
});
