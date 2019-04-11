describe("Frame", function() {

  if (typeof(require) !== 'undefined') {
    Frame = require('../src/Frame')
  }

  var frame;

  beforeEach(function(){
    frame = new Frame();
  });

  describe('#roll', function() {
    it('has two rolls', function() {
      expect(frame.firstRoll).toEqual(null);
      expect(frame.secondRoll).toEqual(null);
    });

    it('can add one roll', function() {
      frame.roll(3);
      expect(frame.firstRoll).toEqual(3);
      expect(frame.secondRoll).toEqual(null);
    });

    it('can add second roll', function() {
      frame.roll(3);
      frame.roll(6);
      expect(frame.firstRoll).toEqual(3);
      expect(frame.secondRoll).toEqual(6);
    });
  });

  describe('#isComplete', function() {

    it('identifies when a frame is complete', function () {
      frame.roll(3);
      frame.roll(4);
      expect(frame.isComplete()).toEqual(true);
    });

    it('identifies when a frame is not complete', function() {
      frame.roll(3);
      expect(frame.isComplete()).toEqual(false);
    });

    it('identifies when a frame is complete for a strike', function() {
      frame.roll(10);
      expect(frame.isComplete()).toEqual(true);
    })
  });

  describe('#score', function() {
    it('calculates the score for the frame', function() {
      frame.roll(3);
      frame.roll(5);
      expect(frame.score()).toEqual(8)
    })
  });

  describe('#isSpare', function() {
    it('recognises it is a spare', function() {
      frame.roll(5)
      frame.roll(5)
      expect(frame.isSpare()).toEqual(true)
    })

    it('recognises it is not a spare', function() {
      frame.roll(4)
      frame.roll(3)
      expect(frame.isSpare()).toEqual(false)
    })

    it('recognises it is not a spare when it is a strike', function() {
      frame.roll(10)
      expect(frame.isSpare()).toEqual(false)
    })
  })

  describe('#isStrike', function() {
    it('recognises it is a strike', function() {
      frame.roll(10)
      expect(frame.isStrike()).toEqual(true)
    })

    it('recognises it is not a strike', function() {
      frame.roll(3)
      frame.roll(4)
      expect(frame.isStrike()).toEqual(false)
    })

    it('recognises it is not a strike when it is a spare', function() {
      frame.roll(7)
      frame.roll(3)
      expect(frame.isStrike()).toEqual(false)
    })
  })

})
