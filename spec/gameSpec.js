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

    it("a score counter per frame without bonuses", function(){
      expect(game.runningScoreWithoutBonus).toEqual([]);
    });

    it("a total score counter", function(){
      expect(game.totalScore).toEqual(0);
    });
  });

  describe("Import a frame ", function(){
    it("strike frame", function(){
      game.addFrame(strikeFrame);
      expect(game.scoreBoard).toEqual([strikeFrame]);
    });

    it("spare frame", function(){
      game.addFrame(spareFrame);
      expect(game.scoreBoard).toEqual([spareFrame]);
    });

    it("normal frame", function(){
      game.addFrame(normalFrame);
      expect(game.scoreBoard).toEqual([normalFrame]);
    });
  });

  describe("Running Score without bonus", function(){
    it("works for strikes", function(){
      game.addFrame(strikeFrame);
      expect(game.runningScoreWithoutBonus).toEqual([10]);
    });

    it("works for spares", function(){
      game.addFrame(spareFrame);
      expect(game.runningScoreWithoutBonus).toEqual([10]);
    });

    it("works for normal frames", function(){
      game.addFrame(normalFrame);
      expect(game.runningScoreWithoutBonus).toEqual([9]);
    });

    it("works on more than one frame", function(){
      game.addFrame(strikeFrame);
      game.addFrame(spareFrame);
      game.addFrame(normalFrame);
      expect(game.runningScoreWithoutBonus).toEqual([10,10,9]);
    });
  });

  describe("calculate score", function(){
    it("can calculate the normal scores without anything special", function(){
      game.addFrame(normalFrame);
      game.addFrame(normalFrame);
      game.addFrame(normalFrame);
      expect(game.totalScore).toEqual(27);
    });
  });

  describe("specials", function(){
    it("can tell if the last frame was a spare", function(){
      game.addFrame(spareFrame);
      game.addFrame(normalFrame);
      game.specials();
      expect(game.wasLastFrameASpare).toEqual(true);
    });
  });

});
