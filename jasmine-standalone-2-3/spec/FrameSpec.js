describe("Frame", function(){

  it("calculates a total for a non-bonus frame", function(){
    var frame1 = new Frame([1,1]);
    var frame2 = new Frame([1,1]);
    expect(frame1.total(frame2)).toEqual(2);
  });

  it("calculates the total for a spare", function() {
    var frame1 = new Frame([6,4]);
    var frame2 = new Frame([1,1]);
    expect(frame1.total(frame2)).toEqual(11);
  });

});
