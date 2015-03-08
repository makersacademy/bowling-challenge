describe('Frame', function() {

  beforeEach(function(){
    frame = new Frame();
    roll = new Roll();
  })

    describe('first roll.', function() {

      it('Starts with the a rollOne score of 0', function() {
        expect(frame.rollOne).toEqual(0);
      });

      it('When 8 pins are hit, the score is assigned to rollOne', function() {
        spyOn(roll, "getPinsHit").and.returnValue(8)
        frame.setRollOneScore(roll)
        expect(frame.getRollOneScore()).toEqual(8)
      });

      it('Will not take a roll score of greater than 10', function() {
        frame.setRollOneScore(roll);
        expect(frame.rollOne).toEqual(0);
      });

    });

    describe('second roll.', function() {

      it('Starts with a rollTwo score of 0', function() {
        expect(frame.rollTwo).toEqual(0);
      });

    });

    it('Starts wit a bonusRoll score of 0', function() {
      expect(frame.bonusRoll).toEqual(0);
    });


    it('Knows to start on frame 1 ', function(){
      expect(frame.frameNumber).toEqual(1);
    });

    it('When on frame 2 knows that it is in frame 2', function() {
      frame.nextFrame();
      expect(frame.frameNumber).toEqual(2)
    });

});