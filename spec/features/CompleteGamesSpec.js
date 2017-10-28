describe("The Big Lebowski", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  describe("no strikes or spares", function() {
    it("calculates correct total", function() {
      var rolls = [2,3,4,3,6,1,2,3,4,1,2,3,4,3,2,4,1,2,3,2];
      rolls.forEach(function(rollValue) {
        game.addRoll(rollValue);
      })
      expect(game.totalScore()).toEqual(rolls.reduce(function(a, b) { return a + b; }))
    })
  })

  describe("no strikes, but some spares (not in frame 10)", function() {
    it("calculates correct total", function() {
      var rolls = [2,3, 4,6, 6,1, 2,8, 4,1, 2,3, 4,3, 2,4, 1,9, 3,2];
      rolls.forEach(function(rollValue) {
        game.addRoll(rollValue);
      })
      expect(game.totalScore()).toEqual(83)
    })
  })

});
