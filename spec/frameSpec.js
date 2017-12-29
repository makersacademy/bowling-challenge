describe("Frame", function() {
  var frame

  beforeEach(function(){
  frame = new Frame;
  });

  it ('initiliazes new frames with a score of 0', function() {
    expect(frame.frameScore).toEqual(0)
  })

})
