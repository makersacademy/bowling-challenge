describe("Frame", function() {
  var frameOne;

  beforeEach(function() {
    frameOne = new Frame();
  });

  it("should total the score from two bowls", function() {
    expect(frameOne.score(5,4)).toEqual(9);
    expect(frameOne.score(10,0)).toEqual(10);
    expect(frameOne.score(5,5)).toEqual(10);
    expect(frameOne.score(0,0)).toEqual(0);
  });




});
