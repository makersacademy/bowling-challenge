describe("Game", function(){
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("gutter game if score is zero at the end of the game", function() {
    for (i = 0; i < 20; i++) {
      game.roll(0)};
      expect(game.score()).toEqual(0);
  });

  it("can handle all ones", function() {
    for (i = 0; i < 20; i++) {
      game.roll(1)};
      expect(game.score()).toEqual(20);
  });

  it("can handle a Spare", function() {
    game.roll(5);
    game.roll(5);
    game.roll(2);
    for (i = 0; i < 17; i++) {
      game.roll(0)};
    expect(game.score()).toEqual(14);
  });

  it("can handle a Strike", function() {
    game.roll(10);
    game.roll(2);
    game.roll(5);
    for (i = 0; i < 16; i++) {
      game.roll(0)};
    expect(game.score()).toEqual(24);
  });
});
