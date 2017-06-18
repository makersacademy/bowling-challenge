describe("Final Frame", function(){

  var finalFrame;
  var perfectFinalFrame;
  var spareFrameFrame;

  beforeEach(function(){
    finalFrame = new FinalFrame(1,1,0)
    perfectFinalFrame = new FinalFrame(10,10,10)
    spareFinalFrame = new FinalFrame(5,5,1)
  });

  it("Sums the total of each bowl", function(){
    expect(finalFrame.getScore()).toEqual(2)
  });

  it("Throws error when scoring bonusBowl unless there is a strike or spare", function(){
    expect(function() { new FinalFrame(1, 1, 1) }).toThrow(new Error("Illegal Score: Bonus bowl is only scored for a strike or spare."))
  });

  it("Calculates bonus score when all bowls are strikes", function(){
    expect(perfectFinalFrame.getScore()).toEqual(30);
  });

  it("Calculates bonus score when first two bowls are a spare", function(){
    expect(spareFinalFrame.getScore()).toEqual(11);
  });

});
