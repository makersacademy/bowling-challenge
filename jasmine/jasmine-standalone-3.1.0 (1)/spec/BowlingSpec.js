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
      expect(numberOfPins.frame).toEqual(0)
    })
  });

  describe('firstRoll', function() {
    it('chooses a number and shows a new array', function() {
      expect(numberOfPins.firstRoll(6)).toEqual([0, 1, 2, 3, 4])
    });

    it('goes to the next frame if 10 is chosen', function() {
      expect(numberOfPins.firstRoll(10)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    });

    it('throws an error if frame is already 10', function() {
      numberOfPins.frame = 10
      expect(function(){numberOfPins.firstRoll(9);}).toThrowError('You already did 10 frames!');
    });
  });

  describe('secondRoll', function() {
    it('chooses a number from nextButtons and goes to the next frame', function() {
      expect(numberOfPins.secondRoll(3)).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    })
  })
});
