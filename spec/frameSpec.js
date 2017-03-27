describe('Frame', function() {
  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('A roll', function() {

    it('returns a random number between 0 and 10', function() {
      expect(frame.roll()).toBeLessThan(11);
    });

    it('returns the number of pins standing', function() {
      expect(frame.PINS).toEqual(frame.pinsRemaining() + hit);
    });

  });


  describe('A strike', function() {
    x = 0;
    beforeEach(function() {
      spyOn(frame, 'roll').and.returnValue(10)
    });

    it('is registered on the first roll when all ten pins have been knocked down.', function() {
      spyOn(frame, 'checkWhichRoll').and.returnValue(2)
      expect(frame.bonus()).toEqual("STRIKE! Next roll doubled!");
    });

    it('is not registered on the second roll when all ten pins have been knocked down.', function() {
      spyOn(frame, 'checkWhichRoll').and.returnValue(3)
      expect(frame.bonus()).not_toEqual("STRIKE! Next roll doubled!");
    });
  });

  describe('A spare', function() {

    it('is registered on the second roll when all ten pins have been knocked down.', function() {
      spyOn(frame, 'checkWhichRoll').and.returnValue(3)
      frame.calculate(10)
      expect(page).toContain("SPARE! Next roll doubled!");
    });

    it('is not registered on the first roll when all ten pins have been knocked down.', function() {
      spyOn(frame, 'checkWhichRoll').and.returnValue(2)
      spyOn(frame, 'roll').and.returnValue(10)
      expect(frame.spare()).toEqual("SPARE! Next roll doubled!");
    });

  });

});
