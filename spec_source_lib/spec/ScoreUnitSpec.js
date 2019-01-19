describe("Score", function() {
  var new_score;
  

  beforeEach(function() {
    new_score = new Score(9);
  });

  it("should be able to store roll score input by user", function() {
    expect(new_score.score).toEqual(9);  
  });

})