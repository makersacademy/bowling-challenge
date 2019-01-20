describe("Game - Unit Tests", function() {
  var game;
  var roll_score;

  beforeEach(function() {
    game = new Game();
    roll_score = new Frame(5, 2);
  });

  it("should store and return score of a frame", function() {
    game.roll(roll_score.score());
    expect(game.currentScore()).toEqual(7);
  });

  it("should store and return multiple roll scores", function() {
    game.roll(roll_score.score());
    expect(game.currentScore()).toEqual(7);
    game.roll(roll_score.score());
    expect(game.currentScore()).toEqual(14)
  });

  it("should keep track of player rolls", function() {
    expect(game.rollsTook()).toEqual(0)
    game.roll(roll_score.score());
    expect(game.rollsTook()).toEqual(1);
  });

})
