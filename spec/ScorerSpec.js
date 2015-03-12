describe('Scorer', function() {
  var scorer;

  describe('start of a game', function() {

    scorer = new Scorer();
    var frame ;
    for (i = 0; i < 9; i++) {
      frame = new NormalFrame();
      scorer.loadFrame(frame);
    };

    it('should accept nine normal frames', function() {
        expect(scorer.framesCount()).toEqual(9);
    });

    it('should have a total score of zero when a game starts', function() {
      expect(scorer.totalScore).toEqual(0);
    });

  });

  describe('frames one to nine', function() {

    describe('scoring a game with no strikes or spares', function() {

      it('accepts a ball', function() {
        ballOne = new Ball();
        ballOne.setScore(3);

        expect(totalScore)
      });


    });

  });

});