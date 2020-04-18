describe('Scorecard', () => {

  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  describe('frames[0] (first frame)', () => {

    it('after calling record(1) frames[0].roll1 should eq 1', () => {
      scorecard.record(1);
      expect(scorecard.frames[0].roll1).toEqual(1);
    });

    it('after calling record(2) frames[0].roll1 should eq 2', () => {
      scorecard.record(2);
      expect(scorecard.frames[0].roll1).toEqual(2);
    });

    it('after calling record(1) twice frames[0].roll2 and frames[0].roll2 should eq 1', () => {
      scorecard.record(1);
      scorecard.record(1);
      expect(scorecard.frames[0].roll1).toEqual(1);
      expect(scorecard.frames[0].roll2).toEqual(1);
    });

    it('after calling record(1) twice runningTotal(0) (for frame 0) should eq 2', () => {
      scorecard.record(1);
      scorecard.record(1);
      expect(scorecard.runningTotal(0)).toEqual(2);
    });

    it('after calling record(2) twice runningTotal(0) should eq 4', () => {
      scorecard.record(2);
      scorecard.record(2);
      expect(scorecard.runningTotal(0)).toEqual(4);
    });

    
  });

  describe('frames[1] (second frame)', () => {

    it('after calling record(1) thrice frames[1].roll1 should eq 1', () => {
      scorecard.record(1);
      scorecard.record(1);
      scorecard.record(1);
      expect(scorecard.frames[1].roll1).toEqual(1);
    });

    it('after calling record(1) four times runningTotal(1) (for frame 1) should eq 4', () => {
      scorecard.record(1);
      scorecard.record(1);
      scorecard.record(1);
      scorecard.record(1);
      expect(scorecard.runningTotal(1)).toEqual(4);
    });

    it('after calling record(2) four times runningTotal(1) should eq 8', () => {
      scorecard.record(2);
      scorecard.record(2);
      scorecard.record(2);
      scorecard.record(2);
      expect(scorecard.runningTotal(1)).toEqual(8);
    });

  });

});