describe("Frame", function() {
  var new_score;
  

  beforeEach(function() {
    new_score = new Frame(6, 2);
  });

  
  it("should store two rolls", function() {
    expect(new_score.roll1).toEqual(6);
    expect(new_score.roll2).toEqual(2);
  });

  it("should return sum of two rolls", function() {
    expect(new_score.score()).toEqual(8);  
  });

  it("should be able to store single roll score (strike) input by user", function() {
    strike_score = new Frame(10, 0)
    expect(strike_score.score()).toEqual(10);  
  });

})