describe("Game", function () {
  let game;
  let frame;
  let frameFactory;

  beforeEach(function () {
    frame = { 
      addRoll: () => {},
      addBonusScore: () => {},
      calcFrameTotal: () => {},
      setFrameTotal: () => {},
      isFinalFrameComplete: () => {},
      isFrameComplete: () => {},
      isStrike: () => {},
      isSpare: () => {}
    };
    spyOn(frameFactory, "createFrame").and.returnValue(frame);
    game = new Game();
  });

  describe("new instancs of game class", function () {
    it("frame array is empty for frame instance", function () {
      expect(game.frames).toEqual([]);
    });

    it("have current frame set to frame passed in", function () {
      expect(game.currentFrame).toEqual(frame);
    });
  });

  describe("method for each bowl", function () {
    it("correctly adds 1 frame to frames array", function () {
      spyOn(game, "_isNewFrame").and.returnValues(false, true);
      game.roll(5);
      game.roll(4);
      expect(game.frames.length).toEqual(1);
    });

    it("correctly adds 2 frames to frames array", function () {
      spyOn(game, "_isNewFrame").and.returnValues(false, true, false, true);
      for(let i=0; i < 2; i++){
        game.roll(5);
        game.roll(4);
      }
      expect(game.frames.length).toEqual(2);
    });

    it("correctly adds 2 frames to frames array", function () {
      spyOn(game, "_isNewFrame").and.returnValues(false, true, false, true, false, true);
      for(let i=0; i < 3; i++){
        game.roll(5);
        game.roll(4);
      }
      expect(game.frames.length).toEqual(3);
    });
  });

  describe("scores games correctly", function () {
    it("returns correct score for one frame", function () {
      spyOn(game, "_isNewFrame").and.returnValues(false, true);
      spyOn(frame, "calcFrameTotal").and.returnValues(8);
      game.roll(4);
      game.roll(4);
      expect(game.scoreTotal()).toEqual(8);
    });

    it("returns correct score for two frames", function () {
      spyOn(game, "_isNewFrame").and.returnValues(false, true, false, true);
      spyOn(frame, "calcFrameTotal").and.returnValues(8, 8);
      for(let i=0; i < 3; i++){
        game.roll(4);
        game.roll(4);
      }
      expect(game.scoreTotal()).toEqual(16);
    });

    it("returns correct score for two frames", function () {
      spyOn(game, "_isNewFrame").and.returnValues(false, true, false, true, false, true);
      spyOn(frame, "calcFrameTotal").and.returnValues(8, 8, 8);
      for(let i=0; i < 4; i++){
        game.roll(4);
        game.roll(4);
      }
      expect(game.scoreTotal()).toEqual(24);
    });
  });
});
