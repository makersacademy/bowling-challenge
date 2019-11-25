describe("Bowling Game", function(){
  var bowl;

  beforeEach(function(){
      bowl = new Bowling();
  });

  it("should have a starting score of '0' zero", function(){
    expect(bowl._score).toEqual(0);
  });

  it("can increase the score by '1'",function(){
    bowl.increaseScore(1);
    expect(bowl._score).toEqual(1);
  });

  it("score cannot go over the value '10'", function(){
    bowl._score = 10;
    expect(function(){ bowl.increaseScore()}).toThrow("Strike: Maximum frame score attained");
  });

  it("can decrease the score by '-1'", function(){
    bowl.decreaseScore(1);
    expect(bowl._score).toEqual(-1);
  });

  it("can calculate the subtotal score of a frame", function(){
    bowl.frameSubTotal(5,4);
    expect(bowl._score).toEqual(9);
  });
});
