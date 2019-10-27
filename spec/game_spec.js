describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe('roll', function() {
    it('manages the BowlingCard and ScoreCalculator', function() {
       game.roll(6);
       game.roll(3);

       expect(game.getScoreCard()).toEqual([{frame: 1, roll: 1, pins: 6}, {frame: 1, roll: 2, pins: 3}]);
       expect(game.getCurrentFrame()).toEqual(2);
       expect(game.getCurrentRoll()).toEqual(1);

       expect(game.getScore()).toEqual(9);
       expect(game.getFrameScores()).toEqual([9, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
       expect(game.bonuses()).toEqual(["normal", "normal"]);
       expect(game.getframes()).toEqual([1, 1]);
       expect(game.getRolls()).toEqual([1, 2]);
       expect(game.getPins()).toEqual([6, 3]);
    });
  });

  describe('getScore', function() {
    it('displays the players current score.', function() {
      expect(game.getScore()).toEqual(0);
    });
  });

  describe('getCurrentFrame', function() {
    it('displays the players current Frame.', function() {
      expect(game.getCurrentFrame()).toEqual(1);
    });
  });

  describe('getCurrentRoll', function() {
    it('displays the players current Roll.', function() {
      expect(game.getCurrentRoll()).toEqual(1);
    });
  });
});

// console.log( game.getScore() );
// console.log( game.getFrameScores() );
// console.log( game.bonuses() );
// console.log( game.getframes() );
// console.log( game.getRolls() );
// console.log( game.getPins() );
