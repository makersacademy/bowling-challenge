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
    expect(scorecard.lastFrame).toEqual( [3, 4] );
  });

  it("calculates a total for the frame", function(){
    scorecard.bowlOne(3);
    scorecard.bowlTwo(4);
    expect(scorecard.playerScores).toEqual([7]);
  });

  it("saves multiple frames and their scores", function(){
    scorecard.bowlOne(3);
    scorecard.bowlTwo(4);
    scorecard.bowlOne(5);
    scorecard.bowlTwo(1);
    expect(scorecard.allFrames).toEqual( [ [3,4] , [5,1] ] );
    expect(scorecard.playerScores).toEqual( [7, 6] );
    expect(scorecard.runningTotal).toEqual(13);
  });

  it("registers a strike if all pins are knocked over", function(){
    scorecard.bowlOne(10);
    expect(scorecard.lastFrame).toEqual( ['X'] );
  });

  it("registers a spare if the frame adds up to 10", function(){
    scorecard.bowlOne(5);
    scorecard.bowlTwo(5);
    expect(scorecard.lastFrame).toEqual( [5, '/'] );
  });

  it("alternates appropriately between bowlOne and bowlTwo", function(){
    scorecard.bowl(5);
    scorecard.bowl(3);
    scorecard.bowl(10);
    scorecard.bowl(2);
    scorecard.bowl(4);
    expect(scorecard.allFrames).toEqual( [ [5, 3], ['X'], [2, 4] ] );
    expect(scorecard.playerScores).toEqual( [8, 16, 6] );
    expect(scorecard.runningTotal).toEqual( 30 );
  });

  it("increments the current frame", function(){
    scorecard.bowl(5);
    scorecard.bowl(2);
    expect(scorecard.currentFrame).toEqual(1);
    scorecard.bowl(10);
    expect(scorecard.currentFrame).toEqual(2);
    scorecard.bowl(9);
    expect(scorecard.currentFrame).toEqual(3);
  });

});

describe("Strikes and spares", function(){

  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  it("adds bonus points from the next two rolls after a strike", function(){
    scorecard.bowlOne(10);
    scorecard.bowlOne(5);
    scorecard.bowlTwo(2);
    expect(scorecard.allFrames).toEqual( [ ['X'], [5, 2] ] );
    expect(scorecard.playerScores).toEqual( [17, 7] );
  });

  it("adds bonus points from the next roll after a spare", function(){
    scorecard.bowlOne(9);
    scorecard.bowlTwo(1);
    scorecard.bowlOne(6);
    scorecard.bowlTwo(2);
    expect(scorecard.allFrames).toEqual( [ [9, '/'], [6, 2] ] );
    expect(scorecard.playerScores).toEqual( [16, 8] );
  });

  it("correctly scores a spare following a strike", function(){
    scorecard.bowlOne(10);
    scorecard.bowlOne(7);
    scorecard.bowlTwo(3);
    scorecard.bowlOne(9);
    scorecard.bowlTwo(0);
    scorecard.bowlOne(10);
    scorecard.bowlOne(0);
    scorecard.bowlTwo(8);
    expect(scorecard.allFrames).toEqual( [ ['X'], [7, '/'], [9, 0], ['X'], [0, 8] ] );
    expect(scorecard.playerScores).toEqual( [20, 19, 9, 18, 8] );
    expect(scorecard.runningTotal).toEqual(74);
  });



});
