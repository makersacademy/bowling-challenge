describe("Player", () => {
  var player;
  var frame;
  beforeEach(() => {
    player = new Player("Player 1");

    frame = jasmine.createSpyObj("frame", ["SomeFn"], {
      firstTurn: 3,
      secondTurn: 5,
    });
  });

  it("Displays player name", () => {
    expect(player.name).toEqual("Player 1");
  });

  it("Has numbers of frames", () => {
    expect(player.frames).toEqual([]);
  });

  it("Show the number of turns each player did", () => {
    expect(player.turns).toEqual(0);
  });

  describe("newFrame", () => {
    it("add new frame to the frames list", () => {
      player.newFrame("this is a frame");
      expect(player.frames.length).toEqual(1);
    });

    it("Raise error if player try to play more then 10 turns", () => {
      for (var i = 0; i < 10; i++) {
        player.newFrame("this is a frame");
      }
      expect(() => {
        player.newFrame("11th frame");
      }).toThrow(new Error("Max frames reached for the game"));
    });
  });

  describe("frameScore", () => {
    it("Display the score for each frame", () => {
      player.newFrame(frame);
      player.newFrame(frame);
      expect(player.frameScore()).toEqual([8, 8]);
    });

    it("Display the strike and calculate the bonus for the next frame", () => {
      var frame1 = jasmine.createSpyObj("frame", ["SomeFn"], {
        firstTurn: "Strike",
        secondTurn: undefined,
      });
      var frame2 = jasmine.createSpyObj("frame", ["SomeFn"], {
        firstTurn: 4,
        secondTurn: 1,
      });
      player.newFrame(frame1);
      player.newFrame(frame2);
      expect(player.frameScore()).toEqual(["Strike", 20]);
    });

    it("Calculate the score of Spare round", () => {
      var frame1 = jasmine.createSpyObj("frame", ["SomeFn"], {
        firstTurn: 5,
        secondTurn: 5,
      });
      var frame2 = jasmine.createSpyObj("frame", ["SomeFn"], {
        firstTurn: 2,
        secondTurn: 4,
      });
      player.newFrame(frame1);
      player.newFrame(frame2);
      expect(player.frameScore()).toEqual(["Spare", 18]);
    });
  });

  describe("totalScore", () => {
    it("return the total score of the game", () => {
      player.newFrame(frame);
      player.newFrame(frame);
      expect(player.totalScore()).toEqual(16);
    });
  });

  describe("frameCounter", () => {
    it("Counts the number of frames played by the player", () => {
      player.newFrame("this is a fake frame");
      expect(player.turns).toEqual(1);
    });
  });
});
