describe("Frame ten", function() {
  var frameTen;

  it("takes a third roll if the first roll is a strike", function() {
    frameTen = new FrameTen(firstRoll = 10);
    frameTen.addRoll(3);
    frameTen.addRoll(4);
    expect(frameTen.total()).toEqual(17);
  })

  it("takes a third roll if it is a spare", function() {
    frameTen = new FrameTen(firstRoll = 2);
    frameTen.addRoll(8);
    frameTen.addRoll(4);
    expect(frameTen.total()).toEqual(14);
  })

});
