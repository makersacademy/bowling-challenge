describe("Game", function () {
  let game;

  beforeEach(function () {
    frame = { 
      addRoll: () => {},
      calcFrameTotal: () => {},
      isFrameComplete: () => {},
      isFinalFrameComplete: () => {},
      isStrike: () => {},
      isSpare: () => {}
    };
    spyOn(frameFactory, "createFrame").and.returnValue(frame);
    game = new Game(frameFactory);
  });

  describe("method for each bowl", function () {

    // Is it possible to do a behaviour test on roll method?
    it("tbc", function () {
      game.roll(5);
      game.roll(4);
    });

    it("tbc", function () {
      for(let i=0; i < 2; i++){
        game.roll(5);
        game.roll(4);
      }
    });

    it("tbc", function () {
      for(let i=0; i < 3; i++){
        game.roll(5);
        game.roll(4);
      }
    });
  });

  describe("scores games correctly", function () {
    it("returns correct score for one frame", function () {
      spyOn(frame, "isFrameComplete").and.returnValues(false, true);
      spyOn(frame, "calcFrameTotal").and.returnValues(8);
      game.roll(4);
      game.roll(4);
      expect(game.scoreTotal()).toEqual(8);
    });

    it("returns correct score for two frames", function () {
      spyOn(frame, "isFrameComplete").and.returnValues(false, true, false, true);
      spyOn(frame, "calcFrameTotal").and.returnValues(8, 8);
      for(let i=0; i < 3; i++){
        game.roll(4);
        game.roll(4);
      }
      expect(game.scoreTotal()).toEqual(16);
    });

    it("returns correct score for two frames", function () {
      spyOn(frame, "isFrameComplete").and.returnValues(false, true, false, true, false, true);
      spyOn(frame, "calcFrameTotal").and.returnValues(8, 8, 8);
      for(let i=0; i < 4; i++){
        game.roll(4);
        game.roll(4);
      }
      expect(game.scoreTotal()).toEqual(24);
    });


    it("returns correct score for two frames with a spare", function () {
      spyOn(frame, "isFrameComplete").and.returnValues(false, true, false, true);
      spyOn(frame, "calcFrameTotal").and.returnValues(10, 8);
      game.roll(5);
      game.roll(5);
      game.roll(4);
      game.roll(4);
      expect(game.scoreTotal()).toEqual(18);
    });

    it("returns correct score for two frames with a strike", function () {
      // add test here
    });
  });
});
