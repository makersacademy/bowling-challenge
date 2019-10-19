describe("BowlingScore", function(){

  beforeEach(function(){
    prevRound = jasmine.createSpy('prevRound')
    bowlingscore = new BowlingScore();
  });

  describe("newRound", function() {
    it("create a new round", function(){
      bowlingscore.newRound()

      expect(bowlingscore.round).toBeInstanceOf(Round)
    });
  });

  describe("addPlus", function(){
    it("add a plus to previus round", function(){
      bowlingscore.newRound()
      prevRound.tot = 10
      bowlingscore.round.tot = 3

      expect(bowlingscore.addPlus(prevRound)).toEqual(13)
    });
  });

  describe("checkPlus", function() {
    it("check if a plus is needed to previous round", function(){
      bowlingscore.newRound()
      prevRound.plus = "strike"
      prevRound.tot = 10
      bowlingscore.round.tot = 3
      bowlingscore.checkPlus(prevRound)

      expect(prevRound.tot).toEqual(13)
    });
  });
});
