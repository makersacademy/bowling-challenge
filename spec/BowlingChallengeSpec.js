describe("#game", function () {
  var game;
  
  beforeEach(function() {
    game = new Game();
  });
  
  
  it("shows the current score", function () {
    expect(game.currentScore).toBeDefined();
  });
  
  describe("#roll", function() {
    it("returns a number between 0 and 10 in the first round", function() {
      var a = game.roll();
      expect(a).toBeWithinRange(0, 10);
    });
    
    it("returns a number between 0 and remaining number of pins in the second round", function() {
      game.hasKnockedDown(5);
      var a = game.roll();
      expect(a).toBeWithinRange(0, 5);
    });
  });
  
  describe("#recordScore", function() {
    it("marks the numbers of pins knocked down in the correct round", function() {
      var game = new Game();
      for (var i = 1; i<=4; i++) {
        game.hasKnockedDown(i);
      }
      expect(game.board[1][1]).toEqual(4);
    });
  });
  
  describe("#setTypeFrame", function() {
    it("shows strike when 10 pins knocked-down in one round", function() {
      game.hasKnockedDown(10);
      expect(game.setTypeFrame(game.board[0])).toEqual("Strike");
    });
    
    
    it("shows spare when 10 pins knocked-down in one frame", function() {
      game.hasKnockedDown(5);
      game.hasKnockedDown(5);
      expect(game.setTypeFrame(game.board[0])).toEqual("Spare");
    });
  });
});
