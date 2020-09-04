describe("Player", () => {
  var player;

  beforeEach(() => {
    player = new Player("Player 1");
  });

  it("Displays player name", () => {
    expect(player.name).toEqual("Player 1");
  });
});
