describe("Score", function() {
  var new_score;
  

  beforeEach(function() {
    new_score = new Score(9);
  });

  it("should be able to store the score of a roll", function() {
    expect(new_score.score).toEqual(9);  
  });

})