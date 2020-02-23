'use strict';

describe('Frame', function() {;
  var frame;
  beforeEach(function(){
    frame = new Frame();
  });

  it ('scorecard is zero by default', function() {
    expect(frame.score()).toEqual(frame.scoreCard);
  });

  describe('first bowl', function(){
    it ('returns the first bowl score', function() {
      expect(frame.scoreCard).toEqual([0, 0])
      frame.firstBowl(4)
      expect(frame.scoreCard).toEqual([4, 0])
      });
    }); 

  describe('second bowl', function(){
    it ('returns the second bowl score', function() {
      expect(frame.scoreCard).toEqual([0, 0])
      frame.firstBowl(4)
      expect(frame.scoreCard).toEqual([4, 0])
      frame.secondBowl(5)
      expect(frame.scoreCard).toEqual([4, 5])
      });
    });

  describe('exceeds 10', function(){
    it('does not allow numbers greater than 10 for one roll', function(){
      expect(function() {frame.firstBowl(12)}).toThrow("Score exceeded 10")
      expect(function() {frame.secondBowl(11)}).toThrow("Score exceeded 10")
    });
  });

  describe('pins', function(){
    it('initially starts with 10 pins', function(){
      expect(frame.tenpins).toBe(10)
    })

    it('first roll is 2 and has 8 pins remaining', function(){
      frame.firstBowl(2);
      expect(frame.tenpins).toBe(8)
    })

    it('first roll is 10 and has 0 pins remaining', function(){
      frame.firstBowl(10);
      expect(frame.tenpins).toBe(0)
    })

    it('first roll is 6, second roll is 2, and has 2 pins remaining', function(){
      frame.firstBowl(6)
      frame.secondBowl(2)
      expect(frame.tenpins).toBe(2)
    })

    it('throws an error if no pins remain', function(){
      frame.firstBowl(6);
      frame.secondBowl(4)
      expect(frame.tenpins).toBe(0)
    })
  })

  describe('total score', function(){
    it('gives total score', function(){
      frame.firstBowl(5);
      frame.secondBowl(2);
      frame.total()
    expect(frame.totalScore).toEqual(7)
    })
  })

  describe('stike', function(){
    it('is a strike', function(){
      frame.firstBowl(10);
      expect(frame.isAStrike()).toBe(true)
    })


    it('is NOT a strike', function(){
      frame.firstBowl(9);
      expect(frame.isAStrike()).toBe(false)
    })
  })
  
  describe('spare', function(){
    it('is a spare', function(){
      frame.firstBowl(5);
      frame.secondBowl(5);
      expect(frame.isASpare()).toBe(true)
    })

    it('is NOT a spare', function(){
      frame.firstBowl(5);
      frame.secondBowl(4);
      expect(frame.isASpare()).toBe(false)
    }); 

    it('is a spare', function(){
      frame.firstBowl(0)
      frame.secondBowl(10)
      expect(frame.isASpare()).toBe(true)
    });
  });
});
