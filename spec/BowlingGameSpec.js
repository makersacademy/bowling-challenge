describe('BowlingGame', function(){
  beforeEach(function(){
  });

  describe('#bowl', function(){
    it('Can bowl a ball', function(){
      var game = new BowlingGame();
      game.letsBowl();
    });
  }); 

  describe('#frame', function(){
    it('Can display the current frame', function(){
      var game = new BowlingGame();
      expect(game.currentFrame()).toBe(1);
    });
  });
});
