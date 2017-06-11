describe("Rack", function(){
  var rack;

  beforeEach(function(){
    rack = new Rack;
  });

  it("Has 10 standing pins by default", function(){
    expect(rack.getStandingPinsAmount()).toEqual(10);
  });
})
