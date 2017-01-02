describe ("Frame", function () {

  beforeEach(function(){
    frame = new Frame();
  });

  describe('first bowl', function(){
    it('adds the first bowl to the frame score', function(){
        expect(frame.firstBowl(8)).toEqual(8);
    });

    it('returns a value of 10 when the first bowl knocks down 10 pins', function(){
        expect(frame.firstBowl(10)).toEqual(10);
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

  describe('Update Frame Index', function () {
    it('increases the frame index by 1 after the second bowl of a frame', function() {
      frame.updateFrameIndex()
      expect(frame.frameIndex).toEqual(2)
    })

    it('increases the frame index by 1 after a strike in the first bowl of a frame', function () {
      frame.bowl(10)
      expect(frame.frameIndex).toEqual(2)
    })

    it('Does not increase the frame index after a first bowl of a frame < 10', function () {
      frame.bowl(9)
      expect(frame.frameIndex).toEqual(1)
    })
  })

  describe('Show bowl index', function () {
      it('shows that the player is on bowl 1 at the start of the game', function() {
        expect(frame.bowlIndex()).toEqual(1)
      })

      it('shows that the player is on bowl 2 after the first bowl', function() {
        frame.bowl(6)
        expect(frame.bowlIndex()).toEqual(2)
      })

      it('shows that the player is on bowl 3 after the second bowl', function() {
        frame.bowl(6)
        frame.bowl(3)
        expect(frame.bowlIndex()).toEqual(3)
      })

      it('shows that the player is on bowl 3 after a strike in the first bowl', function() {
        frame.bowl(10)
        expect(frame.bowlIndex()).toEqual(3)
      })
  })
})
