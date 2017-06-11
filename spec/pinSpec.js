describe("Pin",function(){

  var pin;

  beforeEach(function(){
    pin = new Pin;
  });

  it("Is standing by default", function(){
    expect(pin.getCurrentStatus()).toEqual("standing");
  });

});
