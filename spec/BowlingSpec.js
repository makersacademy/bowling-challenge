describe("Player", function() {
  var bowlingGame;
  
  beforeEach(function() {
    bowlingGame = new BowlingGame();
  });

  it("it should initialize an empty array length = 10 for the total frame score", function() {
   
    expect(bowlingGame.getFrameScore(0)).toEqual(0);
  });

  it("it should initialize an empty array for the roll score", function() {
    
     expect(bowlingGame.getRolls(0,0)).toEqual(0);
   });

  
});
