describe('Game', function() {
  var testGame = new Game([[1, 4], [4, 5], [6, 4], [5, 5], [10, 0], [0, 1], [7, 3], [6, 4], [10, 0], [2, 8, 6]]);
  
  it('takes an array of scores and converts them to Frame objects', function() {
    expect(testGame.frames[4] instanceof Frame).toEqual(true);
  });

  describe('.calculateScore()', function() {
    it('calculates the correct score', function() {
      expect(testGame.calculateScore()).toEqual(133);
    });
  });
});
