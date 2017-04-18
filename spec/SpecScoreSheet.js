describe("ScoreSheet", function(){
var playerMock;
var scoreSheet;
var frameMock;
var spareFrame;

  beforeEach(function(){
    function PlayerMock(playerName, frame){
      this.playerName = playerName
      this.currentFrame = frame
    }
    function FrameMock(roll, frameNumber){
      this.pinsAvailable = 10 - roll
      this.rollScores = [roll]
      this.number = frameNumber || 1
    }
    frameMock = new FrameMock();
    spareFrame = new FrameMock(3, 4)
    strikeFrame1 = new FrameMock(3, 2)
    strikeFrame2 = new FrameMock(3, 1)
    playerMock = new PlayerMock("Viola", frameMock);
  });

  describe("#constructor", function(){

    beforeEach(function(){
      scoreSheet = new ScoreSheet(playerMock);
    });

    it("associates itself with a player", function(){
      expect(scoreSheet.player).toEqual(playerMock);
    });

    it("has an object literal scorecard", function(){
      expect(typeof scoreSheet.scoreCard).toEqual("object");
    });

    it("its scorecard has 10 keys, one for each frame", function(){
      expect(Object.keys(scoreSheet.scoreCard).length).toEqual(10);
    });

    it("its scorecard is currently empty", function(){
      expect(scoreSheet.scoreCard[1]).toEqual([]);
    });

    it("has an empty array to store a pending spare", function(){
      expect(scoreSheet.spareRollOwed).toEqual([]);
    });
  });

  describe("#pendingSpare", function(){
    var spareFrameProto;

    beforeEach(function(){
      scoreSheet.pendingSpare(spareFrame)
    });


    it("it pushes a frame into the spareRollOwed array", function(){
      expect(scoreSheet.spareRollOwed).toEqual([spareFrame])
    });

  });

  describe("#updateSpare", function(){

    beforeEach(function(){
      scoreSheet.pendingSpare(spareFrame)
      scoreSheet.updateSpare(3)
    });

    it("updates the necessary frame with the current roll", function(){
      expect(scoreSheet.scoreCard[4]).toEqual([10, 3])
    });
  });

  describe("#lookupFrameScore", function(){

    beforeEach(function(){
      scoreSheet.pendingSpare(spareFrame)
      scoreSheet.updateSpare(3)
    });

    it("calculates the frame score of a given frame number", function(){
      expect(scoreSheet.lookupFrameScore(4)).toEqual(13)
    });
  });

  describe("#factorInStrikes", function(){
    var scoreCard;

    beforeEach(function(){
      scoreSheet2 = new ScoreSheet(playerMock);
      scoreCard = {1: [1, 5], 2:['X', 'pending'], 3:['X', 'pending'],
                   4: ['X', 'pending'], 5:[7, 1], 6:[3, 7]},
      scoreSheet2.scoreCard = scoreCard;
      scoreSheet2.consecutiveStrikes = 3;
      scoreSheet2.factorInStrike(5)
    });

    it("updates the most recent strike frame", function(){

      expect(scoreSheet2.scoreCard[4]).toEqual([10, 8])
    });

    it("updates the 2nd most recent strike frame", function(){
      expect(scoreSheet2.scoreCard[3]).toEqual([10, 18])
    });

    it("updates the 3rd most recent strike frame", function(){
      expect(scoreSheet2.scoreCard[2]).toEqual([10, 20])
    });

    it("resets consecutiveStrikes to 0", function(){
      expect(scoreSheet2.consecutiveStrikes).toEqual(0)
    });
  });
});
