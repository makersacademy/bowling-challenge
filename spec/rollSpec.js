describe('Roll', function () {

  var roll; 
  
  beforeEach(function () {
    roll = new Roll();
  });

  describe('the first turn', function () {
    it('returns the number of pins knocked down for the first turn', function () {
      expect(roll.takeFirstTurn(4)).toEqual(4)
    });

    it('doesn\'t allow more pins than exist to be knocked down', function () {
      expect(function () {
        roll.takeFirstTurn(11);
      }).toThrow(new Error('Sorry please select from 0 to 10 pins!'))
    });
  });

  describe('the second turn', function () {
    it('returns the number of pins knocked down for the second turn', function () {
      expect(roll.takeSecondTurn(4, 4)).toEqual(4)
    });

    it('doesn\'t allow more pins than exist to be knocked down', function () {
      expect(function () {
        roll.takeSecondTurn(5, 3);
      }).toThrow(new Error('Sorry please select from 0 to 3 pins!'))
    });
  });
})