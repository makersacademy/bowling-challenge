describe('Frame', function() {
  var frame;

  it('returns a random number between 0 and 10', function(){
    frame = new Frame();
    expect(frame.roll()).toBeLessThan(11);
  });

  it('returns the number of pins standing', function(){
    expect(frame.pinsRemaining()).toEqual(frame.PINS);
  });

  it('returns the total of a frame', function(){
    expect(frame.total).toEqual([frame.frameTotal()])
  });

xdescribe('Notifies', function(){
    it('that the next frame is ready', function(){
      click('roll');
      expect(page).toHaveContent("ROLL 1 OF 2 READY")
    });
  });


  describe("Strike", function() {
    beforeEach(function(){
      spyOn(frame, 'rollResult').and.returnValue(10)
    });

    it('is registered on the first roll when all ten pins have been knocked down.', function(){
      spyOn(frame, 'checkWhichRoll').and.returnValue(1)
      expect(frame.strike()).toBe(true)
    });

    it('is not registered on the second roll when all ten pins have been knocked down.', function(){
      spyOn(frame, 'checkWhichRoll').and.returnValue(2)
      expect(frame.strike()).toBe(false)
    });
  });

  describe("Spare", function() {
    it('is registered on the second roll when all ten pins have been knocked down.', function(){
      spyOn(frame, 'rollResult').and.returnValue(10)
      spyOn(frame, 'checkWhichRoll').and.returnValue(2)
      expect(frame.spare()).toBe(true)
    });
  });


});
