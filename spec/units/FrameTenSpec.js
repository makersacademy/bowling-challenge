describe("Frame ten", function() {
  var frameTen;
  // beforeEach(function() {
  //   frameTen = new FrameTen(frameNumber = 10, firstRoll = 7);
  // });

  it("takes a third roll if the first roll is a strike", function() {
    frameTen = new FrameTen(frameNumber = 10, firstRoll = 10);
    frameTen.addRoll(3);
    frameTen.addRoll(4);
    expect(frameTen.total()).toEqual(17);
  })

});
