describe("First bowl", function(){


  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  it("can store a number of pins for the first bowl", function(){
    scorecard.bowlOne(5);
    expect(scorecard.firstBowl).toEqual(5);
  });

  it("saves the result of a frame", function(){
    scorecard.bowlOne(3);
    scorecard.bowlTwo(4);
    scorecard.finishFrame();
    expect(scorecard.currentFrame).toEqual( [ [3, 4] ] );
  });

});
