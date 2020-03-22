describe("Game", function() {

  var game;

  beforeEach(function() {
    game = new Game();
  });

    it("Gutter game", function() {
      rollMany(20, 0)
    })

    it("Strike")
  // it("Perfect game", function() {
  //   rollMany(12, 10);
  //   expect(game.score()).toBe(300);
  // });

  function rollMany() {
    for(var i = 0; i < rolls; i++){
      game.roll(pins);
    }
  };
});
