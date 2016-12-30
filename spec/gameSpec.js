describe("Game", function() {
  var frame;

  beforeEach(function() {
    game = new Game();

    strikeFrame = new Frame();
    strikeFrame.firstRollPins = 10;
    strikeFrame.totalPinsDown = 10;
    strikeFrame.strike = true;

    spareFrame = new Frame();
    spareFrame.firstRollPins = 6;
    spareFrame.secondRollPins = 4;
    spareFrame.totalPinsDown = 10;
    spareFrame.spare = true;

    normalFrame = new Frame();
    normalFrame.firstRollPins = 8;
    normalFrame.secondRollPins = 1;
    normalFrame.totalPinsDown = 9;
  });

  describe("The game should start with", function(){
    it("a maximum of 10 frames", function(){
      expect(game.MAXFRAMES).toEqual(10);
    });

    it("a frame counter", function(){
      expect(game.framesComplete).toEqual(0);
    });

    it("an array for the scores to be held", function(){
      expect(game.scoreBoard).toEqual([]);
    });

    it("a running score counter", function(){
      expect(game.runningScore).toEqual([]);
    });

    it("a total score counter", function(){
      expect(game.totalScore).toEqual(0);
    });
  });

  describe("Import a frame and ", function(){
    it("recognise a strike", function(){
      game.addFrame(strikeFrame);
      expect(game.scoreBoard).toEqual(["X"]);
    });

    it("recognise a strike - runningScore", function(){
      game.addFrame(strikeFrame);
      expect(game.runningScore).toEqual([10]);
    });

    it("recognise a spare", function(){
      game.addFrame(spareFrame);
      expect(game.scoreBoard).toEqual([[6, "/"]]);
    });

    it("recognise a spare - runningScore", function(){
      game.addFrame(spareFrame);
      expect(game.runningScore).toEqual([10]);
    });

    it("adds the score of a frame if not X or /", function(){
      game.addFrame(normalFrame);
      expect(game.scoreBoard).toEqual([[8,1]]);
    });

    it("adds the score of a frame if not X or / - running score", function(){
      game.addFrame(normalFrame);
      expect(game.runningScore).toEqual([9]);
    });

    it("moves on to the next frame", function(){
      game.addFrame(normalFrame);
      expect(game.framesComplete).toEqual(1);
    });

    it("moves on to the next frame - X", function(){
      game.addFrame(strikeFrame);
      expect(game.framesComplete).toEqual(1);
    });

    it("moves on to the next frame - /", function(){
      game.addFrame(spareFrame);
      expect(game.framesComplete).toEqual(1);
    });

    it("works on later rolls", function(){
      game.addFrame(normalFrame);
      game.addFrame(strikeFrame);
      game.addFrame(spareFrame);
      expect(game.scoreBoard).toEqual([[8, 1], "X", [6, "/"]]);
    });
  });

  describe("Frames", function(){
    it("does not have more than 10 frames", function(){
      game.framesComplete = 10;
      expect(function() {game.addFrame(normalFrame)}).toThrow(`${game.MAXFRAMES} frames maximum.`)
    });
  });

  describe("Calculating the score", function(){
    it("adds normal frames", function(){
      game.addFrame(normalFrame);
      expect(game.totalScore).toEqual(9);
    });
  });
});
