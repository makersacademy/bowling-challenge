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

  describe("some strikes and spares (but not in frame 10 and not consecutive strikes)", function() {
    it("calculates correct total", function() {
      var rolls = [2,3, 10, 6,1, 2,8, 10, 2,3, 4,3, 2,4, 1,9, 3,2];
      rolls.forEach(function(rollValue) {
        game.addRoll(rollValue);
      })
      expect(game.totalScore()).toEqual(100)
    })
  })

  describe("some consecutive strikes and some spares (but not in frame 10)", function() {
    it("calculates correct total", function() {
      var rolls = [10, 7,3, 9,0, 10, 0,8, 8,2, 0,6, 10, 10, 8,1];
      rolls.forEach(function(rollValue) {
        game.addRoll(rollValue);
      })
      expect(game.totalScore()).toEqual(146)
    })
  })

  describe("some consecutive strikes and spares, including in frame 10)", function() {
    it("calculates correct total", function() {
      var rolls = [10, 7,3, 9,0, 10, 0,8, 8,2, 0,6, 10, 10, 10,8,1];
      rolls.forEach(function(rollValue) {
        game.addRoll(rollValue);
      })
      expect(game.totalScore()).toEqual(167)
    })
  })

});
