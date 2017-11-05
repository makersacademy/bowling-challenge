describe("Frame ten", function() {
  var frameTen;
  var previousFrame = jasmine.createSpyObj('dummyFrame', {'ifBonusRequired': true, 'bonusRollsRequired': 0});

  it("takes a third roll if the first roll is a strike", function() {
    frameTen = new FrameTen(10, previousFrame);
    frameTen.addRoll(3);
    frameTen.addRoll(4);
    expect(frameTen.total()).toEqual(17);
  })

  it("takes a third roll if it is a spare", function() {
    frameTen = new FrameTen(2, previousFrame);
    frameTen.addRoll(8);
    frameTen.addRoll(4);
    expect(frameTen.total()).toEqual(14);
  })

  it("returns a total of 30 points with three strikes", function() {
    frameTen = new FrameTen(10, previousFrame);
    frameTen.addRoll(10);
    frameTen.addRoll(10);
    expect(frameTen.total()).toEqual(30);
  })

});
