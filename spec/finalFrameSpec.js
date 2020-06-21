describe('FinalFrame', function (){
  var finalF;
  beforeEach(function(){
    finalF = new FinalFrame();
  });
  it("it's built with 3 rolls. At the beginning equal to null", function (){
    expect(finalF.pointsFirstRoll()).toEqual(null);
    expect(finalF.pointsSecondRoll()).toEqual(null);
    expect(finalF.pointsThirdRoll()).toEqual(null);
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
      finalF.thirdRoll(2);
      expect(finalF.pointsThirdRoll()).toEqual(2);
    });
  });
});
