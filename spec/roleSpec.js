describe("Role", function() {

  var role;

  beforeEach(function () {
    role = new Role();
  })

  it("has functionality to have points added.", function () {
    role.addPoints(5);
    expect(role.points).toEqual(5);
  });
});
