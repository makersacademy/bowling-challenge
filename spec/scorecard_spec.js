describe("Scorecard", function() {
  var scorecard 

  beforeEach(function() {
    scorecard = new Scorecard 
  });

  // it('should begin a game with a score of 0', function() {
  //   expect(scorecard.getCurrentScore()).toEqual(0);
  // });

  // it('should allow player to enter a score', function() {
  //   scorecard.addScore(5);
  //   expect(scorecard.getCurrentScore()).toEqual(5);
  // });

  // it('should allow the user to see their current score for a frame', function() {
  //   scorecard.addScore(3);
  //   expect(scorecard.getCurrentFrameScore()).toEqual([3]);
  // });

  // it('should allow the user to see the current frame', function() {
  //   expect(scorecard.getCurrentFrame()).toEqual(1);
  // });

  // it('should push the currentFrameScore to the frameScores once complete', function() {
  //   scorecard.addScore(4);
  //   scorecard.addScore(1);
  //   expect(scorecard.frameScores).toEqual([[4,1]]);
  // });

  // it('should increase the currentFrameCount by 1 after a frame has been completed', function() {
  //   scorecard.addScore(2);
  //   scorecard.addScore(7);
  //   expect(scorecard.getCurrentFrame()).toEqual(2);
  // });

  // it('should end the game after frame 10', function() {
  //   for (let i = 0; i < 10; i ++) {
  //     scorecard.addScore(2);
  //     scorecard.addScore(7);
  //   }
  //   expect(function() { scorecard.addScore(3) }).toThrow() 
  // });

  // it('should empty currentFrameScore after frame is completed', function() {
  //  scorecard.addScore(5);
  //  scorecard.addScore(4);
  //  expect(scorecard.getCurrentFrameScore()).toEqual([]); 
  // });

  // it('should end current frame if the player scores a strike', function() {
  //   scorecard.addScore(10);
  //   expect(scorecard.getCurrentFrame()).toEqual(2);
  // });

  // returning the score for complete games 
  
  it('should return score of 0 for gutter game', function() {
    generateRolls(0, 20)
    expect(scorecard.getTotal()).toEqual(0);
  });

  it('should return score of 20 for always knocking down 1', function() {
    generateRolls(1, 20);
    expect(scorecard.getTotal()).toEqual(20);
  });

  it('should return score of 19 when rolling a spare and 6', function() {
    scorecard.addScore(9);
    scorecard.addScore(1);
    scorecard.addScore(3);
    scorecard.addScore(3);
    generateRolls(0, 16);
    expect(scorecard.getTotal()).toEqual(19);
  });

  it('should return score of 28 for strike and 9', function() {
    scorecard.addScore(10);
    scorecard.addScore(5);
    scorecard.addScore(4);
    generateRolls(0, 17);
    expect(scorecard.getTotal()).toEqual(28);
  });

  it('should return score of 300 for perfect game', function() {
    generateRolls(10, 20);
    expect(scorecard.getTotal()).toEqual(300);
  });

  function generateRolls(pinsKnockedDown, rolls) {
    for (let count = 0; count < rolls; count ++) {
      scorecard.addScore(pinsKnockedDown);
    }
  }

});

