describe('Scoring', function() {

  beforeEach(function(){
    score = new Score()
  });

  describe('starting a game', function() {

    it('with a max of 10 frames', function(){
      expect(score.frames).toEqual(10);
    });

    it('begins in the first frame', function(){
      expect(score.frameInPlay).toEqual(1);
    });

    it('begins with a total score of 0', function() {
      expect(score.totalScore).toEqual(0);
    });

  });





});