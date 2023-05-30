const Frame = require('./frame');


describe('Frame', () => {
  describe('the first frame with two zero rolls', () => {
    it('initialises with zero', () => {
        const frame1 = new Frame(0,0);
        expect(frame1.getFrame()).toEqual([0,0]);
    });

    it('sum of the initialised frame', () => {
        const frame1 = new Frame(0,0);
        expect(frame1.sumFrame()).toEqual(0);
    }) 

    it('frame is not a strike', () => {
        const frame1 = new Frame(0, 0);
        expect(frame1.isStrike()).toEqual(false);
      })
  
    it('frame is not a spare', () => {
        const frame1 = new Frame(0, 0);
        expect(frame1.isSpare()).toEqual(false);
    });
});

describe('frame with two rolls upto 9', () => {
    it('its array', () => {
        const frame1 = new Frame(1,5);
        expect(frame1.getFrame()).toEqual([1,5]);
    });

    it('sum of the frame', () => {
        const frame1 = new Frame(1,5);
        expect(frame1.sumFrame()).toEqual(6);
    }) 

    it('frame is not a strike', () => {
        const frame1 = new Frame(1, 5);
        expect(frame1.isStrike()).toEqual(false);
      })
  
    it('frame is not a spare', () => {
        const frame1 = new Frame(1, 5);
        expect(frame1.isSpare()).toEqual(false);
    });
  });

  describe('when the frame is a spare', () => {
    it('its array', () => {
        const frame1 = new Frame(5,5);
        expect(frame1.getFrame()).toEqual([5,5]);
    });

    it('sum of the frame', () => {
        const frame1 = new Frame(5,5);
        expect(frame1.sumFrame()).toEqual(10);
    }) 

    it('frame is not a strike', () => {
        const frame1 = new Frame(5, 5);
        expect(frame1.isStrike()).toEqual(false);
      })
  
    it('frame is  a spare', () => {
        const frame1 = new Frame(5, 5);
        expect(frame1.isSpare()).toEqual(true);
    });
  });

  describe('when the frame is a strike', () => {
    it('its array', () => {
        const frame1 = new Frame(10);
        expect(frame1.getFrame()).toEqual([10]);
    });

    it('sum of the frame', () => {
        const frame1 = new Frame(10);
        expect(frame1.sumFrame()).toEqual(10);
    }) 

    it('frame is a strike', () => {
        const frame1 = new Frame(10);
        expect(frame1.isStrike()).toEqual(true);
      })
  
    it('frame is not a spare', () => {
        const frame1 = new Frame(10);
        expect(frame1.isSpare()).toEqual(false);
    });
  });

});