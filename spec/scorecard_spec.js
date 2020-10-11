describe("Scorecard", function() {
  var scorecard 

  beforeEach(function() {
    scorecard = new Scorecard 
  });
  
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

  // helper function for generating rolls for complete game 

  function generateRolls(pinsKnockedDown, rolls) {
    for (let count = 0; count < rolls; count ++) {
      scorecard.addScore(pinsKnockedDown);
    }
  }

});

