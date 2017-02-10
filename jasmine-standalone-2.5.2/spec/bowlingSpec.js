describe("First bowl", function(){

  beforeEach(function(){
    scorecard = new scorecard();
  });

  it("can select a number of pins for the first bowl", function(){
    expect(scorecard.frame(5)).toEqual(5);
  });

});
