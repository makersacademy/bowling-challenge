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
    spyOn(FrameFactory, "createFrame").and.returnValue(frame);
    game = new Game(FrameFactory);
  });

  describe("correctly calls methods after a roll", function () {

    it("call frame method addRoll with correct argument", function () {
      spyOn(frame, "addRoll").and.returnValues(true);
      game.roll(4);
      expect(frame.addRoll).toHaveBeenCalledWith(4);
    });

    it("call frame method addRoll with correct argument when strike scored", function () {
      spyOn(frame, "addRoll").and.returnValues(true);
      game.roll(10);
      expect(frame.addRoll).toHaveBeenCalledWith(10);
    });

    it("call frame method addRoll with correct argument when 0 scored", function () {
      spyOn(frame, "addRoll").and.returnValues(true);
      game.roll(0);
      expect(frame.addRoll).toHaveBeenCalledWith(0);
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
      spyOn(frame, "isFrameComplete").and.returnValues(true, true);
      spyOn(frame, "calcFrameTotal").and.returnValues(20, 10);
      game.roll(10);
      game.roll(10);
      expect(game.scoreTotal()).toEqual(30);
    });
  });
});
