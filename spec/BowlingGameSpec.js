describe('BowlingGame', function(){

  var bowlingGame;

  beforeEach(function(){
    bowlingGame = new BowlingGame();
  });

  it("has a default value of 0", function() {
    expect(bowlingGame.score).toEqual(0);
  });

  describe("#gutter game", function() {

    it("ends with a score of 0", function() {
      for (var i=0; i <20; i++)
      { bowlingGame.bowl(0); }
      expect(bowlingGame.score).toEqual(0);
    });

  });

});
