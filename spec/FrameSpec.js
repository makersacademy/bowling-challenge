var Frame = require('../src/Frame');

describe('Frame', function() {
  var frame;

  beforeEach(function() {
    frame = new Frame();
  });
  describe('frameNo variable', function() {
    it('Can be assigned a frame number but has a default value of 1 if not assigned', function() {
      expect(frame.frameNo).toEqual(1);
    });

    it('equals 2 if assigned a value of 2 upon instantion', function() {
      frame = new Frame(2);
      expect(frame.frameNo).toEqual(2);
    });
  });

  describe('Roll', function() {
    it('stores the number of pins knocked down on each roll in an array', function() {
      frame.Roll(3);
      expect(frame.pinsKnockedDown[0]).toEqual(3);
    });

    it('only stores 2 throws', function() {
      frame.Roll(2);
      frame.Roll(5);
      frame.Roll(3);
      expect(frame.pinsKnockedDown).toEqual([2,5]);
    });

    it('only allows a total of 10 pins to be entered over 2 rolls', function() {
      frame.Roll(9);
      expect( function() {
        frame.Roll(5);}).toThrowError('You cannot enter more than a total of 10 over 2 rolls');
    });

    it("if a strike is scored, the 2nd roll will automatically be stored as zero so that player's do not have to manually enter this", function() {
      frame.Roll(10);
      expect(frame.pinsKnockedDown[1]).toEqual(0);
    });

    describe('will only allow a 3rd roll if it is the tenth frame and the player has already rolled a strike or a spare',
      function() {
      beforeEach( function() {
        frame.frameNo = 10;
      });

      it('If I roll a strike and another strike it will store 10, 10, 10 in the array pinsKnockedDown', function() {
        frame.Roll(10);
        frame.Roll(10);
        frame.Roll(10);
        expect(frame.pinsKnockedDown).toEqual([10, 10, 10]);
      });

      it('If I roll a spare on my 1st two rolls I will get a 3rd roll e.g. 3, 7, 5, will be stored in the array',
      function() {
        frame.Roll(3);
        frame.Roll(7);
        frame.Roll(5);
        expect(frame.pinsKnockedDown).toEqual([3, 7, 5]);
      });

      it("If a spare or a strike isn't bowled it will not store a third bowl", function() {
        frame.Roll(4);
        frame.Roll(3);
        expect(function() {
          frame.Roll(5);
        }).toThrowError("Sorry you don't get a 3rd bowl");
        expect(frame.pinsKnockedDown).toEqual([4, 3]);
      });
    });
  });

  describe('checkRoll', function() {
    it('will not accept a number higher than 10 or below 0', function() {
      expect(function() {
        frame.checkRoll(11);
      }).toThrowError('The number entered must be between 0 - 10');
      expect(function() {
        frame.checkRoll(-1);
      }).toThrowError('The number entered must be between 0 - 10');
    });
  });

});
