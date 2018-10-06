describe("Game", function(){

  beforeEach(function() {
    game = new Game();
  });

  // As a player
  // So that I can record my score for a game of bowling
  // I can start a new game
  describe("new Game", function() {
    it('starts a new game', function() {
      expect(game).toEqual(game);
    });
  });
    
  // As a player,
  // So that I can keep a record of my scores,
  // I want to be able to add a score for a roll

  describe('roll', function() {
    it('records score of roll', function(){
      game.roll(2);
      expect(game.displayScore()).toEqual(2);
    });
  });

  // As a player
  // So that I can keep track of a full game
  // I can record my score for 10 frames

  describe('10-frames', function () {
    it('starts with ten frames', function () {
      expect(game.frames().length).toBe(10);
    });
  });  
  
  // As a player
  // So that I can view game progress
  // I can see the full scorecard after adding a score
  
})