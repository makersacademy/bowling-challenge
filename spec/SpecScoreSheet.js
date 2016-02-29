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

    xit("pushes a frame into spareRollOwed if there was a spare", function(){
      expect(scoreSheet.spareRollOwed[0]).toEqual(spareFrame)
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
});
