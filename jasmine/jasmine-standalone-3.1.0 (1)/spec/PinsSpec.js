describe('NumberOfPins', function() {
  var numberOfPins;
  beforeEach(function() {
    numberOfPins = new NumberOfPins
  });

  describe('numberOfPins', function() {
    it('has a dafault array', function() {
      expect(numberOfPins.DEFAULT_BUTTONS).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    });

    it('has a counter', function() {
      expect(numberOfPins.frame).toEqual(1)
    });

    it('keeps track of rolls', function() {
      expect(numberOfPins.rolls).toEqual(1)
    });

    it('has a total score', function() {
      expect(numberOfPins.score).toEqual(0)
    });
  });

  describe('roll', function() {
    beforeEach(function() {
      numberOfPins.rolls = 1
    });
    it('chooses a number and shows a new array', function() {
      expect(numberOfPins.roll(6)).toEqual([0, 1, 2, 3, 4])
    });

    it('goes to the next frame if 10 is chosen', function() {
      expect(numberOfPins.roll(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    });

    it('throws an error if frame is already 10', function() {
      numberOfPins.frame = 11
      expect(function(){numberOfPins.roll(9);}).toThrowError('You already did 10 frames!');
     });

     it('chooses a number from nextButtons and goes to the next frame', function() {
       numberOfPins.rolls += 1
       expect(numberOfPins.roll(3)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
     });

     it('can have a third rolls on the 10th frame', function() {

       numberOfPins.rolls += 1
       numberOfPins.frame === 10
       expect(numberOfPins.roll(3)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
     });
  });
});
