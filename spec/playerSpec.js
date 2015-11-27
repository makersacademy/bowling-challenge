describe("Player", function() {
  var player;

  beforeEach(function(){
    player = new Player();
  });

  it("can bowl", function(){
    spyOn(Math, "random").and.returnValue(0.6)
    expect(player.bowl()).toEqual(6);
  });
});
