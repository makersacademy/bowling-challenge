describe('Scorecard', () => {

  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  describe('frame1', () => {

    it('after calling record(1) frame1.roll1 should eq 1', () => {
      scorecard.record(1);
      expect(scorecard.frame1.roll1).toEqual(1);
    });

    it('after calling record(2) frame1.roll1 should eq 2', () => {
      scorecard.record(2);
      expect(scorecard.frame1.roll1).toEqual(2);
    });

    it('after calling record(1) twice frame1.roll2 and frame1.roll2 should eq 1', () => {
      scorecard.record(1);
      scorecard.record(1);
      expect(scorecard.frame1.roll1).toEqual(1);
      expect(scorecard.frame1.roll2).toEqual(1);
    });

    it('after calling record(1) twice frame1.runningTotal should eq 2', () => {
      scorecard.record(1);
      scorecard.record(1);
      expect(scorecard.frame1.runningTotal()).toEqual(2);
    });

    it('after calling record(2) twice frame1.runningTotal should eq 4', () => {
      scorecard.record(2);
      scorecard.record(2);
      expect(scorecard.frame1.runningTotal()).toEqual(4);
    });

    
  });

  describe('frame2', () => {

    it('after calling record(1) thrice frame2.roll1 should eq 1', () => {
      scorecard.record(1);
      scorecard.record(1);
      scorecard.record(1);
      expect(scorecard.frame2.roll1).toEqual(1);
    });

    it('after calling record(1) four times frame2.roll2 should eq 1 and runningTotal should eq 4', () => {
      scorecard.record(1);
      scorecard.record(1);
      scorecard.record(1);
      scorecard.record(1);
      expect(scorecard.frame2.runningTotal).toEqual(4);
    });

  });

});