describe('Game', function() {
  var testGame = new Game([[1, 4], [4, 5], [6, 4], [5, 5], [10, 0], [0, 1], [7, 3], [6, 4], [10, 0], [2, 8, 6]]);
  var perfectGame = new Game([[10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 0], [10, 10, 10]]);
  var gutterGame = new Game([[0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]);

  it('takes an array of scores and converts them to Frame objects', function() {
    expect(testGame.frames[4] instanceof Frame).toEqual(true);
  });

  describe('.calculateScore()', function() {
    it('calculates the correct score', function() {
      expect(testGame.calculateScore()).toEqual(133);
    });

    it('calculates correct score for perfect game', function() {
      expect(perfectGame.calculateScore()).toEqual(300);
    });

    it('calculates correct score for gutter game', function() {
      expect(gutterGame.calculateScore()).toEqual(0);
    });
  });
});
