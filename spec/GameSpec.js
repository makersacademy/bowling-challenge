describe('Game', function(){
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('When starting a new game', function() {
    it('The current frame is set to 1', function (){
      expect(game.currentFrame).toEqual(1)
    });
  });

  describe('When taking a turn and scoring less than 10', function(){
    it('The player will get another turn for the frame, with the remaining pins standing', function() {
      game.rollBall(6);
      expect(game.standingPins).toEqual(10 - game.latestScore)
    });
  });

  describe('After a player completes their turn', function(){
    it('The current frame will increment up by 1', function() {
      game.rollBall(10);
      expect(game.currentFrame).toEqual(2)
    });
  });

  describe('When I roll the ball', function() {
    it('up to 10 pins can be knocked down', function (){
      score = Math.floor(Math.random() * 11);
      game.rollBall(score);
      expect(game.latestScore >= 0 && game.latestScore <= 10).toBeTruthy();
    });
  });
});
