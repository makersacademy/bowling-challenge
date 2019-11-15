describe('Scorecard', function(){
  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard;
  });

  describe('Defaults', function(){
    it('Can be an instance of scorecard', function(){
      expect(scorecard).toBeInstanceOf(Scorecard);
    });

    it('Has default amount of rolls set to 2', function(){
      expect(scorecard.rolls).toEqual(2);
    });

    it('Has a total score set to 0', function(){
      expect(scorecard.totalScore).toEqual(0);
    });

    it('Has an array of played frames which are empty', function(){
      expect(scorecard.frames).toEqual([]);
    });

    it('Has counter for what number frame it is on', function(){
      expect(scorecard.frameCounter).toEqual(1);
    });
  });

  describe('Add score', function(){
    it('On start new instance of frame is created', function(){
      expect(scorecard.currentFrame).toBeInstanceOf(Frame);
    });
  });
});