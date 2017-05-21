describe('Bowling, scoring a spare:', function() {
  var theDude;
  var _hook;
  var game;
  var score;
  beforeEach(function() {
    game = new Game();
    game.newGame();
    score = new Score();
    theDude = new Bowling(game, score);
    spyOn(theDude, '_hook').and.returnValue(5);
    for(var x = 0; x < 2; x++) {
      theDude.throw();
    }
  });

  describe('it doesn\'t store the frame total till after the next roll', function() {
    it('it returns nothing', function() {
      expect(theDude.game.scoreCard[0][2]).toEqual(undefined);
    });
  });
  describe('another 5 after the spare', function() {
    beforeEach(function() {
      theDude.throw();
    });
    it('adds the points to the total and stores it', function() {
      expect(theDude.game.scoreCard[0]).toEqual([5,5,15]);
    })
  });
});
