describe("ScoreCard", function() {
  describe("starting a new game", function(){
    beforeEach(function() {
      player = new Player();
      scorecard = new Scorecard();
    });

    describe("#score", function(){
      it("returns the cumulative score of the player", function(){
        expect(scorecard.score()).toEqual(0);
      });
    });

    describe("#roll", function(){
      it("adds the argument to the score", function(){
        player.roll(1, scorecard);
        expect(scorecard.score()).toEqual(1);
      });
    });
  });
});
