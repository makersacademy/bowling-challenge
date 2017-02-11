describe("Gameplay", function(){

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
    // scorecard.finishFrame();
    expect(scorecard.currentFrame).toEqual( [3, 4] );
  });

  it("calculates a total for the frame", function(){
    scorecard.bowlOne(3);
    scorecard.bowlTwo(4);
    // scorecard.finishFrame();
    expect(scorecard.playerScore).toEqual(7);
  });

  it("saves multiple frames and an accumalative total score", function(){
    scorecard.bowlOne(3);
    scorecard.bowlTwo(4);
    // scorecard.finishFrame();
    scorecard.bowlOne(5);
    scorecard.bowlTwo(1);
    // scorecard.finishFrame();
    expect(scorecard.allFrames).toEqual( [ [3,4] , [5,1] ] );
    expect(scorecard.playerScore).toEqual(13);
  });

  it("registers a strike if all pins are knocked over", function(){
    scorecard.bowlOne(10);
    expect(scorecard.currentFrame).toEqual( ['X'] );
  })

});
