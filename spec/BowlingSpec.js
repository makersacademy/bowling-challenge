'use script';

describe('Bowling', function() {

  var bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe('initially', function() {
    it('starts at score: 0', function() {
      expect(bowling.getCurrentScore()).toEqual(0);
    });

    it('starts at frame: 1', function() {
      expect(bowling.getCurrentFrame()).toEqual(1);
    });

    it('starts at roll: 1', function() {
      expect(bowling.getCurrentRoll()).toEqual(1);
    });

    it('frame complete is false', function() {
      expect(bowling.isFrameComplete()).toBeFalsy();
    })

    it('starts at pins standing: 10', function() {
      expect(bowling.getPinsStanding()).toEqual(10);
    })
  });

  describe('score', function() {
    it('increases score with add()', function() {
      bowling.add(1);
      expect(bowling.getCurrentScore()).toEqual(1);
    });
  });

  describe('bowl', function() {
    it('increments roll by 1', function() {
      bowling.bowl(1);
      expect(bowling.getCurrentRoll()).toEqual(2);
    });

    it('returns number of pins scored', function() {
      bowling.bowl(5);
      expect(bowling.getFrameScore()).toEqual(5);
    });

    it('reduces pins standing by pins scored', function() {
      bowling.bowl(4);
      expect(bowling.getPinsStanding()).toEqual(6);
    });

    it('raises error if bowl knocks over more than 10', function() {
      expect(function() { bowling.bowl(11); }).toThrowError("Invalid number of pins knocked over");
    });

    it('raises error if bowl knocks over more pins then are standing', function() {
      bowling.bowl(7);
      expect(function() { bowling.bowl(4); }).toThrowError("Invalid number of pins knocked over")
    });
  });

  describe('frame complete', function() {
    it('increments frame', function() {
      bowling.bowl(4);
      bowling.bowl(3);
      expect(bowling.getCurrentFrame()).toEqual(2);
    });


    it('updates score by adding frameScore', function() {
      bowling.bowl(4);
      bowling.bowl(3);
      expect(bowling.getCurrentScore()).toEqual(7);
    });

    it('adds presentFrame into frameHistory', function() {
      bowling.bowl(4);
      bowling.bowl(3);
      expect(bowling.getFrameHistory()).toEqual([[4,3]]);
    });
  });

  describe('presentFrame', function() {
    it('stores the first bowl in the array', function() {
      bowling.bowl(4);
      expect(bowling.getPresentFrame()).toEqual([4]);
    });
  });

  describe('resetFrame', function() {
    it('resets presentFrame', function() {
      bowling.bowl(4);
      bowling.bowl(3);
      expect(bowling.getPresentFrame()).toEqual([]);
    });

    it('resets roll', function() {
      bowling.bowl(4);
      bowling.bowl(3);
      expect(bowling.getCurrentRoll()).toEqual(1);
    });

    it('resets pinsStanding', function() {
      bowling.bowl(4);
      bowling.bowl(3);
      expect(bowling.getPinsStanding()).toEqual(10);
    })
  });
});
