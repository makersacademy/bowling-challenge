describe('bowlingGame', function() {

  beforeEach(function() {
      bowlingGame = new BowlingGame
  });

  describe('default', function() {
    it('bowlingGame frame counter starts on frame 1', function() {
      expect(bowlingGame.frameCounter).toBe(0);
    });
  });

  it('can roll a gutter game', function() {
    customInput(20, 0);
    expect(bowlingGame.score()).toBe(0)
  });

  it('can roll a one point game', function() {
    customInput(20, 1);
    expect(bowlingGame.score()).toBe(20)
  });



  var customInput = function(inputAmount, score) {
      for( i = 0; i < inputAmount; i++) {
        bowlingGame.scoreInput(score);
      }
    }


});
