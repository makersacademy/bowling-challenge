describe('Frame', function() {

  beforeEach(function(){
    roll = new Roll;
    frame = new Frame;
  });

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