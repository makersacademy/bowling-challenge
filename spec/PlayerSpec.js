describe("Player", function() {
  var playerOne;

  beforeEach(function() {
     playerOne = new Player("steve");
  })
  it(" should be able to store the player name", function() {
    expect(playerOne.name).toEqual("steve");
  });

  it(" should be able to store the player's bowls", function() {
    expect(playerOne.bowls).toEqual([]);
  });
  it(" should be able to add the first and second bowls for a frame to the player's bowls", () => {
    playerOne.addFrame(2,7)
    expect(playerOne.bowls).toEqual([2,7]);
  });
  it('should be able to track which Frame the player is in.', () => {
    playerOne.addFrame(9,2)
    expect(playerOne.getFrameCount()).toEqual(2)
  });
  it('should check to see if the 10th frame is a strike or spare and prevent any further bowls if not.', () => {
    for (let index = 0; index < 9; index++) {
      playerOne.addFrame(7,1);
    }
    playerOne.addFrame(8,1)
    playerOne.addFrame(4,3)
    expect(playerOne.bowls[playerOne.bowls.length-2]).toEqual(8)
    expect(playerOne.bowls[playerOne.bowls.length-1]).toEqual(1)
  });
  it('should allow two additional bowls to be recorded if the 10th frame is a strike', () => {
    for (let index = 0; index < 9; index++) {
      playerOne.addFrame(7,1);
    }
    playerOne.addFrame(10);
    playerOne.addFrame(7,2);
    playerOne.addFrame(5,4);
    expect(playerOne.bowls[playerOne.bowls.length -2]).toEqual(7)
    expect(playerOne.bowls[playerOne.bowls.length -1]).toEqual(2) 
  });
  it('should be able to mark the player game as completed', () => {
    for (let index = 0; index < 9; index++) {
      playerOne.addFrame(7,1);
    }
    playerOne.addFrame(8,1)
    expect(playerOne.gameOver).toEqual(true)
  });
  it('should be able to mark the player game as completed or not', () => {
    for (let index = 0; index < 9; index++) {
      playerOne.addFrame(7,1);
    }
    expect(playerOne.gameOver).toEqual(false)
  });
  it('should calculate the score of the player when their game ends', () => {
    for (let index = 0; index < 9; index++) {
      playerOne.addFrame(7,1);
    }
    playerOne.addFrame(8,1)
    expect(playerOne.score).toEqual(81);
  });
  it('should be able to handle a perfect game just fine', () => {
    for (let index = 0; index < 1; index++) {
      playerOne.addFrame(10);
    }
    
  })
});