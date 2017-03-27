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


  xdescribe('A strike', function() {
    x = 0;
    beforeEach(function() {
      spyOn(frame, 'roll').and.returnValue(10)
    });

    it('is registered on the first roll when all ten pins have been knocked down.', function() {
      spyOn(frame, 'checkWhichRoll').and.returnValue(2)
      expect(frame.applyPoints('strike')).toEqual("STRIKE!");
    });

    it('is not registered on the second roll when all ten pins have been knocked down.', function() {
      spyOn(frame, 'checkWhichRoll').and.returnValue(3)
      expect(frame.applyPoints('spare')).not.toEqual("STRIKE!");
    });
  });

  xdescribe('A spare', function() {

    it('is registered on the second roll when all ten pins have been knocked down.', function() {
      spyOn(frame, 'checkWhichRoll').and.returnValue(3)
      frame.calculate(10)
      expect(frame.applyPoints('spare')).toEqual("SPARE!");
    });

    it('is not registered on the first roll when all ten pins have been knocked down.', function() {
      spyOn(frame, 'checkWhichRoll').and.returnValue(2)
      spyOn(frame, 'roll').and.returnValue(10)
      expect(frame.applyPoints('strike')).not.toEqual("SPARE!");
    });

  });

});
