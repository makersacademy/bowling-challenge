var game = new BowlingScore();

describe("BowlingScore",function(){

  describe("addNewRoundScore",function(){
    it("correctly push scores into rawScore array with 2 rounds",function(){
      game.addRoundToRawScores(1);
      game.addRoundToRawScores(9);
      expect(game.rawScores).toEqual([1,9]);
    });

    it("correctly push scores into rawScore array with 6 rounds",function(){
      game.addRoundToRawScores(8);
      game.addRoundToRawScores(2);
      game.addRoundToRawScores(3);
      game.addRoundToRawScores(1);
      expect(game.rawScores).toEqual([1,9,8,2,3,1]);
    });
  });

  describe("createFrameScores",function(){
    it("creates FrameScores array of frame arrays",function(){
      game.createFrameScores();
      expect(game.frameScores).toEqual([[1,9],[8,2],[3,1]]);
    });

    it("add a frame with first round of 0 and second of 10",function(){
      game.addRoundToRawScores(0);
      game.addRoundToRawScores(10);
      game.createFrameScores();
      expect(game.frameScores).toEqual([[1,9],[8,2],[3,1],[0,10]]);
    });

    it("add a frame with first round of 10 and no second round",function(){
      game.addRoundToRawScores(10);
      game.addRoundToRawScores(2);
      game.addRoundToRawScores(3);
      game.createFrameScores();
      expect(game.frameScores).toEqual([[1,9],[8,2],[3,1],[0,10],[10],[2,3]]);
    });
  });

});
