describe("Game:", function() {
  var game;
  var frameScore1 = [3,5];
  var frameScore2 = [6,2];
  var frameScore3 = [1,0];
  var frameScore4 = [6,4];
  var frameScore5 = [1,4];
  var frameScore6 = [10];




  describe("Stores scoring logic:", function() {

    beforeEach(function() {
      game = new Game();
    });

    it("stores a frame's data", function() {
      game.storeScores(frameScore1);
      expect(game.getFrames()).toEqual([frameScore1]);
    });

    it("can calculate the total score at any time", function(){
      game.storeScores(frameScore1);
      game.storeScores(frameScore2);
      game.storeScores(frameScore3);
      expect(game.runningScore()).toEqual(17);
      });
    it("can calculate a bonus score when a player throws a spare", function(){
      game.storeScores(frameScore4);
      game.storeScores(frameScore5);
      // game.calculateBonusScore();
      expect(game.getBonusScores()).toEqual([1]);
    });
    it("can calculate a bonus score when a player throws a strike", function(){
      game.storeScores(frameScore6);
      game.storeScores(frameScore5);
      // game.calculateBonusScore();
      expect(game.getBonusScores()).toEqual([5]);
    });
    it("calculates the total score when called", function() {
      game.storeScores(frameScore1);
      game.storeScores(frameScore2);
      game.storeScores(frameScore3);
      game.storeScores(frameScore4);
      game.storeScores(frameScore5);
      game.storeScores(frameScore6);
      expect(game.calculateTotalScore()).toEqual(43);
    });
  });

});
