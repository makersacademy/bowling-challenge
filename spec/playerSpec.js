describe("Player", function() {
  var player;
  beforeEach(function() {
    player = new Player("Jeff")
  });
  it ("has a name", function () {
    expect(player.name()).toEqual("Jeff");
  });
  it("can roll and hits 0 pins",function() {
    expect(player.roll()).toEqual(0);
  });
})
