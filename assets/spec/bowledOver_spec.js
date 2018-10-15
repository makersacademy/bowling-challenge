describe('Bowling', function() {
  
  let bowling;

  beforeEach(function() {
    bowling = new Bowling();
  });

  describe("New score sheet", function() {

    it('Creates an empty score sheet', function() {
      expect(bowling).toEqual(bowling);
    });
  });

  describe('Begins with', function() {

    it('frame: 1', function() {
      expect(bowling.getFrame()).toEqual(1);
    });
  });

  describe('nextFrame', function() {

    it('Increments frame', function() {
      bowling.nextFrame();
      expect(bowling.getFrame()).toEqual(2);
    });

    it('Resets the pins to 10', function() {
      bowling.nextFrame();
      expect(bowling.pinsSet).toEqual(10);
    });
  });

  describe('isFrameComplete', function() {

    it('Moves to next frame if rolled twice', function() {
      consecutiveRolls(3,2);
      expect(bowling.getFrame()).toEqual(2);
    });

    it('Moves to next frame when strike rolled', function() {
      bowling.roll(10);
      expect(bowling.getFrame()).toEqual(2);
    });
  });

  describe('roll', function() {

    it('Removes pins based on roll', function() {
      bowling.roll(8);
      expect(bowling.pinsSet).toEqual(2);
    });

    it('raises error if pins removed are greater than pins remaining', function() {
      bowling.roll(2);
      expect(function() { bowling.roll(9); }).toThrowError("Please enter a valid number of pins!");
    });
  });

  describe('getScore', function() {
    it('For a simple frame', function() {
      bowling.roll(3);
      bowling.roll(4);
      expect(bowling.getScore()).toEqual(7);
    });

    it('For a strike', function() {
      bowling.roll(10);
      bowling.roll(4);
      bowling.roll(5);
      expect(bowling.getScore()).toEqual(28);
    });

    it('For a spare', function() {
      consecutiveRolls(5,3);
      bowling.roll(3);
      expect(bowling.getScore()).toEqual(23);
    });

    it('For incomplete strike', function() {
      consecutiveRolls(3,2);
      bowling.roll(10);
      expect(bowling.getScore()).toEqual(6);
    });

    it('For incomplete spare', function() {
      consecutiveRolls(3,2);
      bowling.roll(4);
      bowling.roll(6);
      expect(bowling.getScore()).toEqual(6);
    });

    describe('Whole Scorecard', function() {
      it('Gutter game', function() {
        consecutiveRolls(0,20);
        expect(bowling.getScore()).toEqual(0);
      });

      it('Tallys a strike', function() {
        bowling.roll(10);
        bowling.roll(4);
        bowling.roll(3);
        consecutiveRolls(0,16);
        expect(bowling.getScore()).toEqual(24);
      });

      it('Tallys a spare', function() {
        bowling.roll(5);
        bowling.roll(5);
        bowling.roll(3);
        consecutiveRolls(0,17);
        expect(bowling.getScore()).toEqual(16);
      });

      it('Perfect game', function() {
        consecutiveRolls(10,12);
        expect(bowling.getScore()).toEqual(300);
      });
    });
  });

  describe('Tenth frame', function() {
    it('Bonus roll function if strike', function() {
      consecutiveRolls(1,18);
      bowling.roll(10);
      bowling.roll(2);
      bowling.roll(5);
      expect(bowling.getScore()).toEqual(35);
    });

    it('Bonus roll if spare', function() {
      consecutiveRolls(2,18);
      bowling.roll(1);
      bowling.roll(9);
      bowling.roll(10);
      expect(bowling.getScore()).toEqual(56);
    });

    it('No bonus', function() {
      consecutiveRolls(3,18);
      bowling.roll(2);
      bowling.roll(6);
      bowling.roll(5);
      expect(bowling.getScore()).toEqual(62);
    });
});

  let consecutiveRolls = function(pins, rolls) {
    for (let i = 0; i < rolls; i++) {
      bowling.roll(pins);
    }
  };
});