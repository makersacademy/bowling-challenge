describe("Game", function() {
  var game;
  var roll_score;

  beforeEach(function() {
    game = new Game();
    roll_score = new Frame(5,5);
  });

  it("should store and return score of a frame", function() {
    game.roll(roll_score.score());
    expect(game.currentScore()).toEqual(10);
  });

  it("should store and return multiple roll scores", function() {
    game.roll(roll_score.score());
    expect(game.currentScore()).toEqual(10);
  });

  it("should keep track of player rolls", function() {
    game.roll(roll_score.score());
    expect(game.rollsTook()).toEqual(1);
  });

})