describe("Game", function() {
  var game;
  const max_pins = 10;


  beforeEach(function() {
    game = new Game();

  });

  it("adds knocked pins to frame", function() {
    game.roll(6);
    expect(game.frame).toEqual([6]);
  });

  it("can knock max of 10 pins in one roll", function() {
    expect(function() { game.roll(11) }).toThrow("There is max of 10 pins to knock");
  });

});
