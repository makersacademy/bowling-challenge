describe("BowlingScoreUpdater", function() {

  describe("new", function(){
    it("has some starting attributes",function(){
      newUpdater = new BowlingScoreUpdater();
      expect(newUpdater.frameRoundsLeft).toEqual(2);
      expect(newUpdater.currentFrameTotal).toEqual(0);
      expect(newUpdater.currentFrameNumber).toEqual(1);
      expect(newUpdater.currentFrameBonusRounds).toEqual(0);
      expect(newUpdater.prevFrameTotal).toEqual(0);
      expect(newUpdater.prevFrameBonusRounds).toEqual(0);
      expect(newUpdater.prevPrevFrameTotal).toEqual(0);
      expect(newUpdater.prevPrevFrameBonusRounds).toEqual(0);
    });
  });

  describe("shiftFrames", function(){
    it("shifts frame information back one frame",function(){
      newUpdater = new BowlingScoreUpdater();
      newUpdater.currentFrameNumber = 3
      newUpdater.currentFrameTotal = 10
      newUpdater.currentFrameBonusRounds = 2
      newUpdater.prevFrameTotal = 7
      newUpdater.prevFrameBonusRounds = 0
      newUpdater.shiftFrames();
      expect(newUpdater.frameRoundsLeft).toEqual(2);
      expect(newUpdater.currentFrameTotal).toEqual(0);
      expect(newUpdater.currentFrameNumber).toEqual(4);
      expect(newUpdater.currentFrameBonusRounds).toEqual(0);
      expect(newUpdater.prevFrameTotal).toEqual(10);
      expect(newUpdater.prevFrameBonusRounds).toEqual(2);
      expect(newUpdater.prevPrevFrameTotal).toEqual(7);
      expect(newUpdater.prevPrevFrameBonusRounds).toEqual(0);
    });
  });

  describe("updateBonus", function(){
    it("adds bonus score to previous two frames",function(){
      newUpdater = new BowlingScoreUpdater();
      newUpdater.currentFrameNumber = 3
      newUpdater.currentFrameTotal = 10
      newUpdater.currentFrameBonusRounds = 2
      newUpdater.prevFrameTotal = 7
      newUpdater.prevFrameBonusRounds = 2
      newUpdater.prevPrevFrameTotal = 15
      newUpdater.prevPrevFrameBonusRounds = 1
      newUpdater.updateBonus(9);
      expect(newUpdater.prevFrameTotal).toEqual(16);
      expect(newUpdater.prevFrameBonusRounds).toEqual(1);
      expect(newUpdater.prevPrevFrameTotal).toEqual(24);
      expect(newUpdater.prevPrevFrameBonusRounds).toEqual(0);
    });
  });

  describe("newRound", function(){
    it("correctly calculates scores after 1 round",function(){
      newUpdater = new BowlingScoreUpdater();
      newUpdater.newRound(9);
      expect(newUpdater.currentFrameNumber).toEqual(1);
      expect(newUpdater.currentFrameTotal).toEqual(9);
      expect(newUpdater.currentFrameBonusRounds).toEqual(0);
      expect(newUpdater.frameRoundsLeft).toEqual(1);
    });

    it("correctly calculates scores after 2 rounds",function(){
      newUpdater.newRound(1);
      expect(newUpdater.currentFrameNumber).toEqual(1);
      expect(newUpdater.currentFrameTotal).toEqual(10);
      expect(newUpdater.currentFrameBonusRounds).toEqual(1);
      expect(newUpdater.frameRoundsLeft).toEqual(0);
      expect(newUpdater.prevFrameTotal).toEqual(0);
      expect(newUpdater.prevFrameBonusRounds).toEqual(0);
    });

    it("correctly calculates scores after 3 rounds",function(){
      newUpdater.newRound(7);
      expect(newUpdater.currentFrameNumber).toEqual(2);
      expect(newUpdater.currentFrameTotal).toEqual(7);
      expect(newUpdater.currentFrameBonusRounds).toEqual(0);
      expect(newUpdater.frameRoundsLeft).toEqual(1);
      expect(newUpdater.prevFrameTotal).toEqual(17);
      expect(newUpdater.prevFrameBonusRounds).toEqual(0);
    });

    it("correctly calculates scores after 4 rounds",function(){
      newUpdater.newRound(2);
      expect(newUpdater.currentFrameNumber).toEqual(2);
      expect(newUpdater.currentFrameTotal).toEqual(9);
      expect(newUpdater.currentFrameBonusRounds).toEqual(0);
      expect(newUpdater.frameRoundsLeft).toEqual(0);
      expect(newUpdater.prevFrameTotal).toEqual(17);
      expect(newUpdater.prevFrameBonusRounds).toEqual(0);
    });

    it("correctly calculates scores after 5 rounds",function(){
      newUpdater.newRound(10);
      expect(newUpdater.currentFrameNumber).toEqual(3);
      expect(newUpdater.currentFrameTotal).toEqual(10);
      expect(newUpdater.currentFrameBonusRounds).toEqual(2);
      expect(newUpdater.prevFrameTotal).toEqual(9);
      expect(newUpdater.prevFrameBonusRounds).toEqual(0);
    });

    it("correctly calculates scores after 6 rounds",function(){
      newUpdater.newRound(10);
      expect(newUpdater.currentFrameNumber).toEqual(4);
      expect(newUpdater.currentFrameTotal).toEqual(10);
      expect(newUpdater.currentFrameBonusRounds).toEqual(2);
      expect(newUpdater.prevFrameTotal).toEqual(20);
      expect(newUpdater.prevFrameBonusRounds).toEqual(1);
    });

    it("correctly calculates scores after 7 rounds",function(){
      newUpdater.newRound(10);
      expect(newUpdater.currentFrameNumber).toEqual(5);
      expect(newUpdater.currentFrameTotal).toEqual(10);
      expect(newUpdater.currentFrameBonusRounds).toEqual(2);
      expect(newUpdater.prevFrameTotal).toEqual(20);
      expect(newUpdater.prevFrameBonusRounds).toEqual(1);
      expect(newUpdater.prevPrevFrameTotal).toEqual(30);
      expect(newUpdater.prevPrevFrameBonusRounds).toEqual(0);
    });

    it("correctly calculates scores after 8 rounds",function(){
      newUpdater.newRound(8);
      expect(newUpdater.currentFrameNumber).toEqual(6);
      expect(newUpdater.currentFrameTotal).toEqual(8);
      expect(newUpdater.currentFrameBonusRounds).toEqual(0);
      expect(newUpdater.prevFrameTotal).toEqual(18);
      expect(newUpdater.prevFrameBonusRounds).toEqual(1);
      expect(newUpdater.prevPrevFrameTotal).toEqual(28);
      expect(newUpdater.prevPrevFrameBonusRounds).toEqual(0);
    });

    it("correctly calculates scores after 9 rounds",function(){
      newUpdater.newRound(2);
      expect(newUpdater.currentFrameNumber).toEqual(6);
      expect(newUpdater.currentFrameTotal).toEqual(10);
      expect(newUpdater.currentFrameBonusRounds).toEqual(1);
      expect(newUpdater.prevFrameTotal).toEqual(20);
      expect(newUpdater.prevFrameBonusRounds).toEqual(0);
      expect(newUpdater.prevPrevFrameTotal).toEqual(28);
      expect(newUpdater.prevPrevFrameBonusRounds).toEqual(0);
    });

    it("correctly calculates scores after 10 rounds",function(){
      newUpdater.newRound(10);
      expect(newUpdater.currentFrameNumber).toEqual(7);
      expect(newUpdater.currentFrameTotal).toEqual(10);
      expect(newUpdater.currentFrameBonusRounds).toEqual(2);
      expect(newUpdater.prevFrameTotal).toEqual(20);
      expect(newUpdater.prevFrameBonusRounds).toEqual(0);
      expect(newUpdater.prevPrevFrameTotal).toEqual(20);
      expect(newUpdater.prevPrevFrameBonusRounds).toEqual(0);
    });

    it("correctly calculates scores after 11 rounds",function(){
      newUpdater.newRound(10);
      expect(newUpdater.currentFrameNumber).toEqual(8);
      expect(newUpdater.currentFrameTotal).toEqual(10);
      expect(newUpdater.currentFrameBonusRounds).toEqual(2);
      expect(newUpdater.prevFrameTotal).toEqual(20);
      expect(newUpdater.prevFrameBonusRounds).toEqual(1);
      expect(newUpdater.prevPrevFrameTotal).toEqual(20);
      expect(newUpdater.prevPrevFrameBonusRounds).toEqual(0);
    });

    it("correctly calculates scores after 12 rounds",function(){
      newUpdater.newRound(10);
      expect(newUpdater.currentFrameNumber).toEqual(9);
      expect(newUpdater.currentFrameTotal).toEqual(10);
      expect(newUpdater.currentFrameBonusRounds).toEqual(2);
      expect(newUpdater.prevFrameTotal).toEqual(20);
      expect(newUpdater.prevFrameBonusRounds).toEqual(1);
      expect(newUpdater.prevPrevFrameTotal).toEqual(30);
      expect(newUpdater.prevPrevFrameBonusRounds).toEqual(0);
    });

    it("correctly calculates scores after 13 rounds",function(){
      newUpdater.newRound(10);
      expect(newUpdater.currentFrameNumber).toEqual(10);
      expect(newUpdater.currentFrameTotal).toEqual(10);
      expect(newUpdater.currentFrameBonusRounds).toEqual(2);
      expect(newUpdater.frameRoundsLeft).toEqual(0);
      expect(newUpdater.prevFrameTotal).toEqual(20);
      expect(newUpdater.prevFrameBonusRounds).toEqual(1);
      expect(newUpdater.prevPrevFrameTotal).toEqual(30);
      expect(newUpdater.prevPrevFrameBonusRounds).toEqual(0);
    });

  });

});
