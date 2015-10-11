var newUpdater;

describe("BowlingScoreUpdater", function() {

  describe("new", function(){
    it("has some starting attributes",function(){
      var updater = new BowlingScoreUpdater();
      expect(updater.game).toEqual({currentFrameNumber:1, currentFrameTotal:0,
        currentFrameBonusRounds:0, prevFrameTotal:0, prevFrameBonusRounds:0,
        prevPrevFrameTotal:0, prevPrevFrameBonusRounds:0, frameRoundsLeft:2});
    });
  });

  describe("shiftFrames", function(){
    it("shifts frame information back one frame",function(){
      var updater = new BowlingScoreUpdater();
      updater.game = {currentFrameNumber:3, currentFrameTotal:10,
        currentFrameBonusRounds:2, prevFrameTotal:7, prevFrameBonusRounds:0,
        prevPrevFrameTotal:8, prevPrevFrameBonusRounds:0, frameRoundsLeft:1};
      updater.shiftFrames();
      expect(updater.game).toEqual({currentFrameNumber:4, currentFrameTotal:0,
        currentFrameBonusRounds:0, prevFrameTotal:10, prevFrameBonusRounds:2,
        prevPrevFrameTotal:7, prevPrevFrameBonusRounds:0, frameRoundsLeft:2});
    });
  });

  describe("updateBonus", function(){
    it("adds bonus score to previous two frames",function(){
      var updater = new BowlingScoreUpdater();
      updater.game = {currentFrameNumber:3, currentFrameTotal:10,
        currentFrameBonusRounds:2, prevFrameTotal:7, prevFrameBonusRounds:2,
        prevPrevFrameTotal:15, prevPrevFrameBonusRounds:1, frameRoundsLeft:1};
      updater.updateBonus(9);
      expect(updater.game).toEqual({currentFrameNumber:3, currentFrameTotal:10,
        currentFrameBonusRounds:2, prevFrameTotal:16, prevFrameBonusRounds:1,
        prevPrevFrameTotal:24, prevPrevFrameBonusRounds:0, frameRoundsLeft:1});
    });
  });
  //
  describe("newRound", function(){
    it("correctly calculates scores after 1 round",function(){
      newUpdater = new BowlingScoreUpdater();
      newUpdater.newRound(9);
      expect(newUpdater.game).toEqual({currentFrameNumber:1, currentFrameTotal:9,
        currentFrameBonusRounds:0, prevFrameTotal:0, prevFrameBonusRounds:0,
        prevPrevFrameTotal:0, prevPrevFrameBonusRounds:0, frameRoundsLeft:1});
    });

    it("correctly calculates scores after 2 rounds",function(){
      newUpdater.newRound(1);
      expect(newUpdater.game).toEqual({currentFrameNumber:1, currentFrameTotal:10,
        currentFrameBonusRounds:1, prevFrameTotal:0, prevFrameBonusRounds:0,
        prevPrevFrameTotal:0, prevPrevFrameBonusRounds:0, frameRoundsLeft:0});
    });

    it("correctly calculates scores after 3 rounds",function(){
      newUpdater.newRound(7);
      expect(newUpdater.game).toEqual({currentFrameNumber:2, currentFrameTotal:7,
        currentFrameBonusRounds:0, prevFrameTotal:17, prevFrameBonusRounds:0,
        prevPrevFrameTotal:0, prevPrevFrameBonusRounds:0, frameRoundsLeft:1});
    });

    it("correctly calculates scores after 4 rounds",function(){
      newUpdater.newRound(2);
      expect(newUpdater.game).toEqual({currentFrameNumber:2, currentFrameTotal:9,
        currentFrameBonusRounds:0, prevFrameTotal:17, prevFrameBonusRounds:0,
        prevPrevFrameTotal:0, prevPrevFrameBonusRounds:0, frameRoundsLeft:0});
    });

    it("correctly calculates scores after 5 rounds",function(){
      newUpdater.newRound(10);
      expect(newUpdater.game).toEqual({currentFrameNumber:3, currentFrameTotal:10,
        currentFrameBonusRounds:2, prevFrameTotal:9, prevFrameBonusRounds:0,
        prevPrevFrameTotal:17, prevPrevFrameBonusRounds:0, frameRoundsLeft:0});
    });

  //   it("correctly calculates scores after 6 rounds",function(){
  //     newUpdater.newRound(10);
  //     expect(newUpdater.currentFrameNumber).toEqual(4);
  //     expect(newUpdater.currentFrameTotal).toEqual(10);
  //     expect(newUpdater.currentFrameBonusRounds).toEqual(2);
  //     expect(newUpdater.prevFrameTotal).toEqual(20);
  //     expect(newUpdater.prevFrameBonusRounds).toEqual(1);
  //   });
  //
  //   it("correctly calculates scores after 7 rounds",function(){
  //     newUpdater.newRound(10);
  //     expect(newUpdater.currentFrameNumber).toEqual(5);
  //     expect(newUpdater.currentFrameTotal).toEqual(10);
  //     expect(newUpdater.currentFrameBonusRounds).toEqual(2);
  //     expect(newUpdater.prevFrameTotal).toEqual(20);
  //     expect(newUpdater.prevFrameBonusRounds).toEqual(1);
  //     expect(newUpdater.prevPrevFrameTotal).toEqual(30);
  //     expect(newUpdater.prevPrevFrameBonusRounds).toEqual(0);
  //   });
  //
  //   it("correctly calculates scores after 8 rounds",function(){
  //     newUpdater.newRound(8);
  //     expect(newUpdater.currentFrameNumber).toEqual(6);
  //     expect(newUpdater.currentFrameTotal).toEqual(8);
  //     expect(newUpdater.currentFrameBonusRounds).toEqual(0);
  //     expect(newUpdater.prevFrameTotal).toEqual(18);
  //     expect(newUpdater.prevFrameBonusRounds).toEqual(1);
  //     expect(newUpdater.prevPrevFrameTotal).toEqual(28);
  //     expect(newUpdater.prevPrevFrameBonusRounds).toEqual(0);
  //   });
  //
  //   it("correctly calculates scores after 9 rounds",function(){
  //     newUpdater.newRound(2);
  //     expect(newUpdater.currentFrameNumber).toEqual(6);
  //     expect(newUpdater.currentFrameTotal).toEqual(10);
  //     expect(newUpdater.currentFrameBonusRounds).toEqual(1);
  //     expect(newUpdater.prevFrameTotal).toEqual(20);
  //     expect(newUpdater.prevFrameBonusRounds).toEqual(0);
  //     expect(newUpdater.prevPrevFrameTotal).toEqual(28);
  //     expect(newUpdater.prevPrevFrameBonusRounds).toEqual(0);
  //   });
  //
  //   it("correctly calculates scores after 10 rounds",function(){
  //     newUpdater.newRound(10);
  //     expect(newUpdater.currentFrameNumber).toEqual(7);
  //     expect(newUpdater.currentFrameTotal).toEqual(10);
  //     expect(newUpdater.currentFrameBonusRounds).toEqual(2);
  //     expect(newUpdater.prevFrameTotal).toEqual(20);
  //     expect(newUpdater.prevFrameBonusRounds).toEqual(0);
  //     expect(newUpdater.prevPrevFrameTotal).toEqual(20);
  //     expect(newUpdater.prevPrevFrameBonusRounds).toEqual(0);
  //   });
  //
  //   it("correctly calculates scores after 11 rounds",function(){
  //     newUpdater.newRound(10);
  //     expect(newUpdater.currentFrameNumber).toEqual(8);
  //     expect(newUpdater.currentFrameTotal).toEqual(10);
  //     expect(newUpdater.currentFrameBonusRounds).toEqual(2);
  //     expect(newUpdater.prevFrameTotal).toEqual(20);
  //     expect(newUpdater.prevFrameBonusRounds).toEqual(1);
  //     expect(newUpdater.prevPrevFrameTotal).toEqual(20);
  //     expect(newUpdater.prevPrevFrameBonusRounds).toEqual(0);
  //   });
  //
  //   it("correctly calculates scores after 12 rounds",function(){
  //     newUpdater.newRound(10);
  //     expect(newUpdater.currentFrameNumber).toEqual(9);
  //     expect(newUpdater.currentFrameTotal).toEqual(10);
  //     expect(newUpdater.currentFrameBonusRounds).toEqual(2);
  //     expect(newUpdater.prevFrameTotal).toEqual(20);
  //     expect(newUpdater.prevFrameBonusRounds).toEqual(1);
  //     expect(newUpdater.prevPrevFrameTotal).toEqual(30);
  //     expect(newUpdater.prevPrevFrameBonusRounds).toEqual(0);
  //   });
  //
  //   it("correctly calculates scores after 13 rounds",function(){
  //     newUpdater.newRound(10);
  //     expect(newUpdater.currentFrameNumber).toEqual(10);
  //     expect(newUpdater.currentFrameTotal).toEqual(10);
  //     expect(newUpdater.currentFrameBonusRounds).toEqual(2);
  //     expect(newUpdater.frameRoundsLeft).toEqual(0);
  //     expect(newUpdater.prevFrameTotal).toEqual(20);
  //     expect(newUpdater.prevFrameBonusRounds).toEqual(1);
  //     expect(newUpdater.prevPrevFrameTotal).toEqual(30);
  //     expect(newUpdater.prevPrevFrameBonusRounds).toEqual(0);
  //   });
  //
  });

});
