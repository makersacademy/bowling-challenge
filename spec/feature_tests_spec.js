describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game()
  });

  it("allows a person to record a gutter game", function() {
    for (i=0; i < 20; i++) { game.roll(0); }
    expect(game.getScore()).toEqual(0);
  });

  it("allows a person to record a normal score, no bonuses", function() {
    for (i=0; i < 20; i++) { game.roll(1); }
    expect(game.getScore()).toEqual(20);
  });

  it("allows a person to record a perfect game", function() {
    for (i=0; i < 12; i++) { game.roll(10); }
    expect(game.getScore()).toEqual(300);
  });

  it("adds bonus points for getting a split", function() {
    for (i=0; i < 3; i++) {
      game.roll(5);
    }
    expect(game.getScore()).toEqual(20);
  });

  it("ends the frame if player gets a strike", function() {
      game.roll(10);
    expect(game.getCurrentFrame()).toEqual(2);
  });
});
