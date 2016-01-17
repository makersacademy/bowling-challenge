describe("bowlingGame", function() {
  var game;

  beforeEach(function() {
  game = new BowlingGame();
  });

  describe("#bowl", function() {
    it("player can bowl and return a score", function() {
      game.bowl(10);
      expect(game.totalScore).toEqual(10);
    });
  });

  BowlingGame.prototype.gutterBallFirst = function() {
  if (this.PinsKnockedDown === 0) {
    this.calcTotalScore();
    this.incrementRoll();
    return 'gutter_first';
  }
};

BowlingGame.prototype.spareFirstRoll = function() {
  if(this.PinsKnockedDown < 10){
    this.calcTotalScore();
    this.incrementRoll();
    return 'spare_first';
  }
};

BowlingGame.prototype.strikeBall = function() {
  if (this.PinsKnockedDown === 10) {
  this.newFrame();
  console.log("stike1");
  this.calcTotalScore();
  return 'strike!';

}
};

});
