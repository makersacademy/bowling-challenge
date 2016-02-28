describe("ScoreSheet", function(){
var playerMock;
var scoreSheet;
var frameMock;

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


  });

  describe("pendingScores", function(){

    beforeEach(function(){
      // scoreSheet.scoreCard = {1: [3, 5], 2: [8, '/'],
      //                         3: [0, '/'], 4: ['X', 'pending'],
      //                         5: ['X', 'pending'], 6: [4, 5]}
      spyOn(scoreSheet, 'consecutiveStrikes');
      scoreSheet.isReadyForBonusScore();
    });


  });
});
