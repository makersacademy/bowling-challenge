describe("Referee", function() {
  var referee;

  beforeEach(function() {
    referee = new Referee();
  });

  it("exists", function() {
    expect(function(){new Referee()}).not.toThrow();
  });

});
