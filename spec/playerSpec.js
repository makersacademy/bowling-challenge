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

  describe("frameScore", () => {
    it("Display the score for each frame", () => {
      var frame = jasmine.createSpyObj("frame", ["SomeFn"], {
        firstTurn: 3,
        secondTurn: 5,
      });
      player.newFrame(frame);
      player.newFrame(frame);
      expect(player.frameScore()).toEqual([8, 8]);
    });
  });

  describe("totalScore", () => {
    it("return the total score of the game", () => {
      var frame = jasmine.createSpyObj("frame", ["SomeFn"], {
        firstTurn: 3,
        secondTurn: 5,
      });
      player.newFrame(frame);
      player.newFrame(frame);
      expect(player.totalScore()).toEqual(16);
    });
  });

  describe("turns", () => {
    it("Counts the number of frames played by the player", () => {
      player.newFrame("this is a fake frame");
      expect(player.turns).toEqual(1);
    });
  });
});
