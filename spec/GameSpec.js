describe('Game', function(){
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('Start a new game', function() {
    it('The current frame is set to 1', function (){
      expect(game.currentFrame).toEqual(1)
    });
  });

  describe('Take turn and score less than 10', function(){
    it('The player will get another turn for the frame, with the remaining pins standing', function() {
      game.rollBall(6);
      expect(game.standingPins).toEqual(10 - game.latestRoll)
    });
  });

  describe('After completing turn', function(){
    it('The current frame will increment up by 1', function() {
      game.rollBall(10);
      expect(game.currentFrame).toEqual(2)
    });

    it('Check to see if this works after multiple rolls', function(){
      game.rollBall(10);
      game.rollBall(6);
      game.rollBall(4);
      game.rollBall(3);
      game.rollBall(7);
      game.rollBall(10);
      expect(game.currentFrame).toEqual(5)
    });

    it('The score will be recorded', function() {
      game.rollBall(4);
      game.rollBall(5);
      expect(game.totalScores).toEqual([[4,5]])
    });

    it('Check to see multiple scores will be recorded', function(){
      game.rollBall(10);
      game.rollBall(4);
      game.rollBall(5);
      game.rollBall(10);
      game.rollBall(2);
      game.rollBall(8);
      game.rollBall(3);
      game.rollBall(4);
      expect(game.totalScores).toEqual([[19], [4,5], [20], [13], [3,4]])
    });
  });

  describe('When rolling the ball', function() {
    it('up to 10 pins can be knocked down', function (){
      score = Math.floor(Math.random() * 11);
      game.rollBall(score);
      expect(game.latestRoll >= 0 && game.latestRoll <= 10).toBeTruthy();
    });
  });

  describe('Roll a strike', function() {
    it('The next two rolls will be added to previous score as bonus', function() {
      game.rollBall(10);
      game.rollBall(5);
      game.rollBall(4);
      expect(game.totalScores).toEqual([[19], [5, 4]])
    });

    it('Check to see if this works over multiple frames', function() {
      game.rollBall(10);
      game.rollBall(10);
      game.rollBall(10);
      game.rollBall(4);
      game.rollBall(3);
      expect(game.totalScores).toEqual([[20], [20], [17], [4, 3]])
    });
  });

  describe('Knock down 10 pins from the two rolls', function() {
    it('The next roll will be added to previous score as bonus', function() {
      game.rollBall(4);
      game.rollBall(6);
      game.rollBall(4);
      game.rollBall(3);
      expect(game.totalScores).toEqual([[14], [4, 3]])
    });

    it('Check to see if this works over multiple frames', function() {
      game.rollBall(4);
      game.rollBall(6);
      game.rollBall(4);
      game.rollBall(6);
      game.rollBall(4);
      game.rollBall(3);
      expect(game.totalScores).toEqual([[14],[14], [4, 3]])
    });
  });
});
