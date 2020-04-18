describe('Scorecard', () => {

  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  describe('frames[0] (first frame)', () => {

    it('record(1), frames[0].roll1 should eq 1', () => {
      scorecard.record(1);
      expect(scorecard.frames[0].roll1).toEqual(1);
    });

    it('record(2), frames[0].roll1 should eq 2', () => {
      scorecard.record(2);
      expect(scorecard.frames[0].roll1).toEqual(2);
    });

    it('record(1) x2, frames[0].roll2 and frames[0].roll2 should eq 1', () => {
      scorecard.record(1);
      scorecard.record(1);
      expect(scorecard.frames[0].roll1).toEqual(1);
      expect(scorecard.frames[0].roll2).toEqual(1);
    });

    it('record(1) x2, runningTotal(0) (for frame 0) should eq 2', () => {
      scorecard.record(1);
      scorecard.record(1);
      expect(scorecard.runningTotal(0)).toEqual(2);
    });

    it('record(2) x2, runningTotal(0) should eq 4', () => {
      scorecard.record(2);
      scorecard.record(2);
      expect(scorecard.runningTotal(0)).toEqual(4);
    });

  });

  describe('frames[1] (second frame)', () => {

    it('record(1) x3, frames[1].roll1 should eq 1', () => {
      scorecard.record(1);
      scorecard.record(1);
      scorecard.record(1);
      expect(scorecard.frames[1].roll1).toEqual(1);
    });

    it('record(1) x4, runningTotal(1) (for frame 1) should eq 4', () => {
      scorecard.record(1);
      scorecard.record(1);
      scorecard.record(1);
      scorecard.record(1);
      expect(scorecard.runningTotal(1)).toEqual(4);
    });

    it('record(2) x4, runningTotal(1) should eq 8', () => {
      scorecard.record(2);
      scorecard.record(2);
      scorecard.record(2);
      scorecard.record(2);
      expect(scorecard.runningTotal(1)).toEqual(8);
    });

  });

  describe('Spares', () => {

    it('record(5) x3, runningTotal(0) should be 15 (5 + 5 + spare bonus on third roll)', () => {
      scorecard.record(5);
      scorecard.record(5);
      scorecard.record(5);
      expect(scorecard.runningTotal(0)).toEqual(15);
    });

  });

  describe('Strikes', () => {

    it('record(10) then record(1), frame[0] roll1 is 10 and roll2 is 0, and frame[1].roll1 is 1', () => {
      scorecard.record(10)
      scorecard.record(1)
      expect(scorecard.frames[0].roll1).toEqual(10);
      expect(scorecard.frames[0].roll2).toEqual(null);
      expect(scorecard.frames[1].roll1).toEqual(1);
    });

    it('record(10) then record(4) x2, runningTotal(0) is 18 and runningTotal(1) is 28', () => {
      scorecard.record(10)
      scorecard.record(4)
      scorecard.record(4)
      expect(scorecard.runningTotal(0)).toEqual(18);
      expect(scorecard.runningTotal(1)).toEqual(26);
    });

  });


});