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

  describe('playing the first frame', function() {

    it('when roll 1 hits 10 pins the total score is 10', function() {
      score.scoreAdder(10)
      expect(score.totalScore).toEqual(10);
    });

    it('when roll 1 hits 3 and roll 2 hits 4 pins the total score is 7', function() {
      score.scoreAdder(3);
      score.scoreAdder(4);
      expect(score.totalScore).toEqual(7);
    });

  });

  describe('end game', function() {

    it('max total it 300 and will be false if over this', function() {
      score.scoreAdder(300);
      score.scoreAdder(1);
      expect(score.checkTotal()).toEqual(1);
    })

  });


});