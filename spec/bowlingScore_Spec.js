describe('Bowling', function() {

  var score;

  beforeEach(function() {
    score = new Score();


  });
  describe('#scoresIntoFrames', function() {
    it('correctly inputs 3 into frame 1, bowl 1', function() {
      score.scoresIntoFrames(1, 1, 3);
      expect(score.frames[0]['bowl1']).toBe(3);
    });
    it('correctly inputs 8 into frame 5, bowl 2', function() {
      score.scoresIntoFrames(5, 2, 8);
      expect(score.frames[4]['bowl2']).toBe(8);
    });
  });
  describe('#searchFrames', function() {
    it('correctly identifies individual frame/bowl score', function() {
      score.scoresIntoFrames(1, 1, 3);
      expect(score.searchFrames(1, 1)).toEqual(3);
    });
    it('correctly identifies individual frame/bowl score', function() {
      score.scoresIntoFrames(1, 2, 9);
      expect(score.searchFrames(1, 2)).toEqual(9);
    });
  });
});
