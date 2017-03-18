describe('Game', function(){
  var game;
  // var player;

  beforeEach(function() {
    game = new Game();
  });

  describe('When starting a new game', function() {
    it('The current frame is set to 1', function (){
      // game.startNewGame();
      expect(game.currentFrame).toEqual(1)
    });
  });

  describe('After a player takes their turn', function(){
    it('The current frame will increment up by 1', function() {
      game.rollBall();
      expect(game.currentFrame).toEqual(2)
    });
  });

  describe('When I roll the ball', function() {
    it('up to 10 pins can be knocked down', function (){
      game.rollBall();
      expect(game.frameScore >= 0 && game.frameScore <= 10).toBeTruthy();
    });
  });
});
