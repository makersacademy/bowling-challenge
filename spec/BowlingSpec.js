describe("Bowling Game", function(){
  var bowl;

  beforeEach(function(){
      bowl = new Bowling();
  });

  it("should have a starting score of '0' zero", function(){
    expect(bowl.score).toEqual(0);
  });
});
