describe("Frames", function() {

  var frame;

  it("has a score based on passed in scores", function(){
    frame = new Frame(1, 1);
    expect(frame.getScore()).toEqual(2);
  });

  it("Can't have two values whose sum is greater than 10", function(){
    expect(function() { new Frame(6, 6) }).toThrow(new Error("Illegal Score."))
  });

});
