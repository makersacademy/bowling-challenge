describe('FinalFrame', function (){
  var finalF;
  beforeEach(function(){
    finalF = new FinalFrame();
  });
  it("it's built with 3 rolls. At the beginning equal to null", function (){
    expect(finalF.pointsFirstRoll()).toEqual(null);
    expect(finalF.pointsSecondRoll()).toEqual(null);
    expect(finalF.pointsBonusRoll()).toEqual(null);
  });
  describe('assigning rolls points', function(){
    it('has a method to assign points to the first roll', function(){
    finalF.firstRoll(7);
    expect(finalF.pointsFirstRoll()).toEqual(7);
    });
    it('has a method to assign points to the second roll', function(){
      finalF.secondRoll(5);
      expect(finalF.pointsSecondRoll()).toEqual(5);
    });
    it('has a method to assign points to the third roll', function(){
      finalF.firstRoll(10)
      finalF.bonusRoll(2);
      expect(finalF.pointsBonusRoll()).toEqual(2);
    });
  });
  describe('possible errors to be raised', function(){
    it('raises error if any roll points exceed the max single roll points', function(){
      expect(function(){finalF.firstRoll(12);}).toThrowError('invalid amount of points for single roll');
      expect(function(){finalF.secondRoll(11);}).toThrowError('invalid amount of points for single roll');
      finalF.firstRoll(10)
      expect(function(){finalF.bonusRoll(12);}).toThrowError('invalid amount of points for single roll');
    });
    it('raises error if, with the second roll, the total frame points get greater than 10', function(){
      finalF.firstRoll(9);
      expect(function(){finalF.secondRoll(2);}).toThrowError('invalid amount of points for single frame');
    });
    it('raises error if user try to roll the third ball but they are not eligible', function(){
      finalF.firstRoll(8);
      finalF.secondRoll(1);
      expect(function(){finalF.bonusRoll();}).toThrowError('not eligible for bonus roll');
    });
  });
});
