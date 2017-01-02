describe ("Frame", function () {

  beforeEach(function(){
    frame = new Frame();
  });

  describe('first bowl', function(){
    it('adds the first bowl to the frame score', function(){
        expect(frame.doBowl(8)).toEqual(8);
    });

    it('returns a value of 10 when the first bowl knocks down 10 pins', function(){
        expect(frame.doBowl(10)).toEqual(10);
    });
  });

  describe('Check if number of pins is valid', function() {
    it('returns an error if there are less than 0 pins', function() {
      expect(function() { frame.checkPinValidity(-1) }).toThrow();
    });

    it('returns an error if there are more than 10 pins', function() {
      expect(function() { frame.checkPinValidity(11) }).toThrow();
    })

    it('returns an error if the firstScore + pins are more than 10 pins', function() {
      frame.firstScore = 6
      expect(function() { frame.checkPinValidity(5) }).toThrow();
    })
  })

  describe('Reset frame', function() {
    it('returns the frame first score to 0', function() {
      frame.firstScore = 5
      frame.reset();
      expect(frame.firstScore).toEqual(0);
    })

    it('returns the second score to 0', function() {
      frame.secondScore = 5
      frame.reset();
      expect(frame.secondScore).toEqual(0);
    })
  })


})
