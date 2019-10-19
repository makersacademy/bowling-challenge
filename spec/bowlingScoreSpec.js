describe("BowlingScore", function(){

  beforeEach(function(){
    bowlingscore = new BowlingScore;
    round = new Round;
  });

  describe("newRound", function() {
    it("create a new round", function(){
      bowlingscore.newRound()

      expect(bowlingscore.round).toEqual(round)
    });
  });

  describe("addPlus", function(){
    it("add a plus to previus round", function(){

      expect(bowlingscore.addPlus(3)).toEqual(13)
    });
  });
});
