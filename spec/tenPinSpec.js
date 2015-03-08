describe('tenPin', function() {

  beforeEach(function(){
    tenP = new tenPin;
    frame = new Frame();
  });

    it('sets strike to false when created', function() {
      expect(tenP.isStrike).toBe(false);
    });

    it('sets strike to false when created', function() {
      expect(tenP.isSpare).toBe(false);
    });

  describe('first roll of a frame', function() {

    it('is less than 10 it will set strike to false', function() {
      spyOn(frame, "getRollOneScore").and.returnValue(3)
      tenP.frameFirstRoll(frame);
      expect(tenP.isStrike).toBe(false);
    });

    it('has a roll of 10 then strike will be true', function() {
      spyOn(frame, "getRollOneScore").and.returnValue(10)
      tenP.frameFirstRoll(frame);
      expect(tenP.isStrike).toBe(true);
    });

  });

  describe('second roll of a frame', function() {

    it('will set spare to false when roll 1 + roll 2 is less than 10', function() {

      spyOn(frame, "getRollOneScore").and.returnValue(3)
      spyOn(frame, "getRollTwoScore").and.returnValue(4)
      tenP.frameSecondRoll(frame);
      expect(tenP.isSpare).toBe(false);
    });

    it('will set spare to false when roll 1 + roll 2 is less than 10', function() {
      spyOn(frame, "getRollOneScore").and.returnValue(5)
      spyOn(frame, "getRollTwoScore").and.returnValue(5)
      tenP.frameSecondRoll(frame);
      expect(tenP.isSpare).toBe(true);
    });

  })

});