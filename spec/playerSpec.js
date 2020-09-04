describe("Player", () => {
  var player;

  beforeEach(() => {
    player = new Player("Player 1");
  });

  it("Displays player name", () => {
    expect(player.name).toEqual("Player 1");
  });

  it("Has numbers of frames", () => {
    expect(player.frames).toEqual([]);
  });

  describe("newFrame", () => {
    it("add new frame to the frames list", () => {
      player.newFrame("this is a frame");
      expect(player.frames.length).toEqual(1);
    });
  });
});
