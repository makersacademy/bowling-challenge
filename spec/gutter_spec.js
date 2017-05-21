describe('Bowling, gutter game:', function() {
  var theDude;
  var _hook;
  var game;
  beforeEach(function() {
    game = new Game();
    game.newGame();
    theDude = new Bowling(game);
    spyOn(theDude, '_hook').and.returnValue(0);
    for(var x = 0; x < 20; x++) {
      theDude.throw();
    }
});

  describe('it plays out for 10 frames', function() {
    it('total is 0', function() {
      expect(theDude.game.scoreCard[9][2]).toEqual(0);
    });
  });
});
