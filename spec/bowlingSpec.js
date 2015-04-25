describe("Thermostat", function(){

  beforeEach(function(){
    game = new Game();
  });

  it("will return the current frame", function(){
    expect(game.frame).toEqual(1);
  });

});