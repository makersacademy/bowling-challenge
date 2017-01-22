describe('Game', function(){
  var game
  var frame
  var strikeFrame
  var spareFrame
  var normalFrame
  var bonusFrame
  var bonusFrameSpare
  var gutterFrame

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

    bonusFrame = new Frame();
    bonusFrame.firstRollPins = 10;
    bonusFrame.secondRollPins = 10;
    bonusFrame.bonusRollPins = 10;
    bonusFrame.totalPinsDown = 30;

    bonusFrameSpare = new Frame();
    bonusFrameSpare.firstRollPins = 4;
    bonusFrameSpare.secondRollPins = 6;
    bonusFrameSpare.bonusRollPins = 10;
    bonusFrameSpare.totalPinsDown = 15;

    gutterFrame = new Frame();
    gutterFrame.totalPinsDown = 0;
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

    it("can calculate a spare - RSWOB", function(){
      game.addFrame(spareFrame);
      game.addFrame(normalFrame);
      expect(game.runningScoreWithoutBonus).toEqual([10,9])
    });

    it("can calculate a spare - TS", function(){
      game.addFrame(spareFrame);
      game.addFrame(normalFrame);
      expect(game.totalScore).toEqual((10+9+8))
    });

    it("can calculate a strike - RSWOB", function(){
      game.addFrame(strikeFrame);
      game.addFrame(normalFrame);
      expect(game.runningScoreWithoutBonus).toEqual([10,9])
    });

    it("can calculate a strike - TS", function(){
      game.addFrame(strikeFrame);
      game.addFrame(normalFrame);
      expect(game.totalScore).toEqual((10+9+8+1))
    });

    it("can calculate two strikes in a row - RSWOB", function(){
      game.addFrame(strikeFrame);
      game.addFrame(strikeFrame);
      expect(game.runningScoreWithoutBonus).toEqual([10,10])
    });

    it("can calculate multiple strikes - TS", function(){
      game.addFrame(strikeFrame);
      game.addFrame(strikeFrame);
      game.addFrame(strikeFrame);
      expect(game.totalScore).toEqual((30+20+10))
    });

    it("can deal with random patterns - RSWOB", function(){
      game.addFrame(strikeFrame);
      game.addFrame(spareFrame);
      game.addFrame(normalFrame);
      game.addFrame(spareFrame);
      game.addFrame(strikeFrame);
      expect(game.runningScoreWithoutBonus).toEqual([10,10,9,10,10]);
    });

    it("can deal with random patterns - TS", function(){
      game.addFrame(strikeFrame);
      game.addFrame(spareFrame);
      game.addFrame(normalFrame);
      game.addFrame(spareFrame);
      game.addFrame(strikeFrame);
      expect(game.totalScore).toEqual((10+6+4) + (10 + 8) + 9 +(10 +10) + 10);
    });


  });

  describe("specials", function(){
    it("can tell if it is the first frame", function() {
      game.addFrame(spareFrame);
      expect(game.isFirstFrame).toEqual(true);
    });

    it("can tell if the last frame was a spare", function(){
      game.addFrame(spareFrame);
      game.addFrame(normalFrame);
      expect(game.wasLastFrameASpare).toEqual(true);
    });

    it("can tell if the last frame was a strike", function(){
      game.addFrame(strikeFrame);
      game.addFrame(normalFrame);
      expect(game.wasLastFrameAStrike).toEqual(true);
    });

    it("can tell if there were two strikes in a row", function(){
      game.addFrame(strikeFrame);
      game.addFrame(strikeFrame);
      game.addFrame(normalFrame);
      expect(game.wereLastTwoFramesBothStrikes).toEqual(true);
    });
  });

  describe("bonus roll", function(){
    it("calculates score for the bonus role where appropriate - RSWOB", function(){
      game.addFrame(strikeFrame);
      game.addFrame(strikeFrame);
      game.addFrame(strikeFrame);
      game.addFrame(strikeFrame);
      game.addFrame(strikeFrame);
      game.addFrame(strikeFrame);
      game.addFrame(strikeFrame);
      game.addFrame(strikeFrame);
      game.addFrame(strikeFrame);
      game.addBonusFrame(bonusFrame);
      expect(game.runningScoreWithoutBonus).toEqual([10,10,10,10,10,10,10,10,10,[10,10,10]])
    });

    it("calculates score for the bonus role where appropriate - TS", function(){
      game.addFrame(strikeFrame);
      game.addFrame(strikeFrame);
      game.addFrame(strikeFrame);
      game.addFrame(strikeFrame);
      game.addFrame(strikeFrame);
      game.addFrame(strikeFrame);
      game.addFrame(strikeFrame);
      game.addFrame(strikeFrame);
      game.addFrame(strikeFrame);
      game.addBonusFrame(bonusFrame);
      expect(game.totalScore).toEqual((10+20)*9 + (10 + 10 + 10))
    });

    it("calculates score for the bonus role where appropriate - RSWOB", function(){
      game.addFrame(spareFrame);
      game.addFrame(spareFrame);
      game.addFrame(spareFrame);
      game.addFrame(spareFrame);
      game.addFrame(spareFrame);
      game.addFrame(spareFrame);
      game.addFrame(spareFrame);
      game.addFrame(spareFrame);
      game.addFrame(spareFrame);
      game.addBonusFrame(bonusFrame);
      expect(game.runningScoreWithoutBonus).toEqual([10,10,10,10,10,10,10,10,10,[10,10,10]])
    });

    it("calculates score for the bonus role where appropriate - TS", function(){
      game.addFrame(spareFrame);
      game.addFrame(spareFrame);
      game.addFrame(spareFrame);
      game.addFrame(spareFrame);
      game.addFrame(spareFrame);
      game.addFrame(spareFrame);
      game.addFrame(spareFrame);
      game.addFrame(spareFrame);
      game.addFrame(spareFrame);
      game.addBonusFrame(bonusFrame);
      expect(game.totalScore).toEqual((10+6)*8 + (10+10) + (10 + 10 + 10))
    });

    it("calculates score for the bonus role where appropriate - TS", function(){
      game.addFrame(spareFrame);
      game.addFrame(spareFrame);
      game.addFrame(spareFrame);
      game.addFrame(spareFrame);
      game.addFrame(spareFrame);
      game.addFrame(spareFrame);
      game.addFrame(spareFrame);
      game.addFrame(spareFrame);
      game.addFrame(spareFrame);
      game.addBonusFrame(bonusFrameSpare);
      expect(game.totalScore).toEqual((10+6)*8 + (10+4) + (4 + 6 + 5 ))
    });
  });

  describe("Special games", function(){
    it("has a gutter game", function(){
      game.addFrame(gutterFrame);
      game.addFrame(gutterFrame);
      game.addFrame(gutterFrame);
      game.addFrame(gutterFrame);
      game.addFrame(gutterFrame);
      game.addFrame(gutterFrame);
      game.addFrame(gutterFrame);
      game.addFrame(gutterFrame);
      game.addFrame(gutterFrame);
      game.addFrame(gutterFrame);
      expect(game.isGutterGame).toEqual(true);
    });

    it("has a perfect game", function(){
      game.addFrame(strikeFrame);
      game.addFrame(strikeFrame);
      game.addFrame(strikeFrame);
      game.addFrame(strikeFrame);
      game.addFrame(strikeFrame);
      game.addFrame(strikeFrame);
      game.addFrame(strikeFrame);
      game.addFrame(strikeFrame);
      game.addFrame(strikeFrame);
      game.addBonusFrame(bonusFrame);
      expect(game.isPerfectGame).toEqual(true);
    });
  });
});
