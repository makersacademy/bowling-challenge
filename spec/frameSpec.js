describe("Frames", function() {

  var frame;
  var strike;
  var spare;
  var gutter;

  beforeEach(function(){
    frame = new Frame(1, 1);
    strike = new Frame(10);
    spare = new Frame(5,5);
    gutter = new Frame(0,0);
  });

  it("has a score based on passed in scores", function(){
    expect(frame.getScore()).toEqual(2);
  });

  it("Can't have two values whose sum is greater than 10", function(){
    expect(function() { new Frame(6, 6) }).toThrow(new Error("Illegal Score: Can't be greater than 10"))
  });

  it("Has a default secondBowl score of 0", function(){
    expect(strike.getScore()).toEqual(10);
  });

  it("Returns Frame Status as Strike when first bowl is 10", function(){
    expect(strike.getStatus()).toEqual("strike")
  });

  it("Returns Frame Status as Spare when first bowl isn't 10 but total score is", function(){
    expect(spare.getStatus()).toEqual("spare")
  });

  it("Returns Frame Status as gutter when score is 0", function(){
    expect(gutter.getStatus()).toEqual("gutter")
  });

});
