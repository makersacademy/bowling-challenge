describe('FinalFrame', function (){
  var finalF;
  beforeEach(function(){
    finalF = new FinalFrame();
  });
  it('is created with 3 rolls. At the beginning equal to null', function (){
    expect(finalF.pointsFirstRoll()).toEqual(null);
    expect(finalF.pointsSecondRoll()).toEqual(null);
    expect(finalF.pointsThirdRoll()).toEqual(null);
  });
});
