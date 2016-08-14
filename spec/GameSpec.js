describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
    game.begin();
  });

  it("game begins with a score of 0", function() {
    expect(game.getTotalScore()).toEqual(0);
  });

  describe("#begin", function() {

    it("initialises frame 1", function() {
      expect(game.frame).toEqual(new Frame(1));
    });

    it("instantiates a score object", function() {
      expect(game.score).toEqual(new Score());
    });

  });

  describe("#nextFrame", function() {
    it("increases current frame by one", function() {
      game.nextFrame();
      expect(game.frame).toEqual(new Frame(2));
    });

  });

  describe("#saveScore", function() {

    it("saving after firstRoll adds current score to hash", function() {
      game.frame.firstPinsDown = 5;
      game.saveScore();
      expect(game.score.frameScores).toEqual([{first: 5, second: 0}]);
    });

    it("saving after secondRoll adds current score to hash", function() {
      game.frame.firstPinsDown = 5;
      game.frame.secondPinsDown = 3;
      game.saveScore();
      expect(game.score.frameScores).toEqual([{first: 5, second: 3}]);
    });

    it("saving the frame score updates the total", function() {
      game.frame.firstPinsDown = 5;
      game.frame.secondPinsDown = 3;
      game.saveScore();
      expect(game.score.total).toEqual(8);
    });

  });


});
