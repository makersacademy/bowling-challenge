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

  it("should store single roll score (strike) input by user", function() {
    strike_score = new Frame(10, 0)
    expect(strike_score.score()).toEqual(10);  
  });

  it("should raise error is user enters score > 10", function() {
    expect(function() { error_score = new Frame(9,2); }).toThrow("Invalid score! Can't knock down more than 10 per frame");  
  });  

})
