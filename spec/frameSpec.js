describe("Frame", function() {

  var frame;

  beforeEach(function() {
    frame = new Frame();
    role1 = new Role();
    role2 = new Role();
    role3 = new Role();
    role1.addPoints(3);
    role2.addPoints(5);
    role3.addPoints(8);
  });

  it("should be initialized with undefined number", function () {
    expect(frame.number).toEqual(undefined);
  });

  it("has functionality to add roles", function() {
    frame.add(role1);
    expect(frame.roles[0]).toEqual(role1);
  });

  it("should have functionality to calculate the score of the frame", function () {
    frame.add(role1);
    frame.add(role2);
    frame.calculateScore();
    expect(frame.score).toEqual(8);
  });

  it("should allow for a maximum of 10 regular points per frame", function() {
    frame.add(role1);
    expect( function(){frame.add(role3); } ).toThrow(new Error("Max total regular points are 10"))
  });
});
