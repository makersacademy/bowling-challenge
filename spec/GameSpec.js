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
      expect(game.totalScore()).toEqual(2);
    });
  });
  
  // As a player
  // So that I can view game progress
  // I can see the full scorecard after adding a score

  describe('adds score into into frame', function () {
    it('add roll score into frame get total score', function () {
      game.roll(2);
      game.roll(4);
      expect(game.frames()[1]).toContain(2, 4);
    });
  }); 

  // As a player
  // So that I know where I am in the game
  // I can check which number frame I am currently playing
  
  describe('add new frame', function() {
    it('adds 2nd frame', function () {
      game.roll(2);
      game.roll(4);
      game.roll(5);
      expect(game.frames()[2]).toContain(5);
    });
    
    it('shows current frame', function () {
      game.roll(2);
      game.roll(4);
      game.roll(5);
      expect(game._currentFrameNumber).toEqual(2);
    });
  });

  // As a Player
  // So that I know how well I am playing
  // I can see my current score

  describe('Displays current score', function() {
    it('shows currents total score', function () {
      game.roll(2);
      game.roll(4);
      game.roll(5);
      expect(game.totalScore()).toEqual(11);
    });
  });
  
  // As a Player
  // So that I can see when I have scored a spare (scored 10 on the second roll of a frame)
  // The second roll is marked with a '/' in the scorecard
  
  describe('Spare', function() {
    it('shows currents total score', function () {
      game.roll(2);
      game.roll(4);
      game.roll(5);
      game.roll(5);
      game.roll(3);      
      expect(game._frameScore[2]).toEqual(13);
     
    });
  });
  
})