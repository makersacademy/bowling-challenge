describe('Frame', function() {

  beforeEach(function(){
    roll = new Roll;
    frame = new Frame;
  });

  describe('created with',function() {

    it('a roll one score of 0', function() {
      expect(frame.getRollOneScore()).toEqual(0)
    })

    it('a roll two object having an index of 0 and a score of 0', function() {
      expect(frame.getRollTwoScore()).toEqual({ index: 0, score: 0 })
    })

    it('a bonus roll object having an index of 0 and a score of 0', function() {
      expect(frame.getBonusRollScore()).toEqual({ index: 0, score: 0 })
    })
  })

  describe('setting the scores.', function() {

    it('With a first roll of 8 the frame will score 8 for roll one', function() {
      spyOn(roll, 'getPinsHit').and.returnValue(8)
      frame.setRollOneScore(roll)
      expect(frame.getRollOneScore()).toEqual(8)
    })

    it('With a second roll of 2 the frame will score 2 for roll two ', function() {
      spyOn(roll, 'getPinsHit').and.returnValue(2)
      frame.setRollTwoScore(roll)
      expect(frame.getRollTwoScore()).toEqual(2)
    })

    it('With a bonus roll of 10 the frame will score 10 for the bonus roll', function() {
      spyOn(frame, 'getBonusRollScore').and.returnValue('next first roll')
      frame.setBonusRollScore(frame)
      expect(frame.getBonusRollScore()).toEqual('next first roll')
    })

  })

});