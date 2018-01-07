
describe ("Player", function() {
  var player;

  beforeEach(function() {
    player = new Player()
  })

  it("should allow the player a single bowl and to observe the score", function() {
    player.bowl(9);
    expect(player.displaySingleScore()).toEqual("You bowled out 9 pins");
  })

  it("should start the game in frame 1", function() {
    expect(player.displayFrame()).toEqual("You are currently in frame 1");
  })

  it("should notify the player they bowled a strike", function() {
    player.bowl(10);
    expect(player.displaySingleScore()).toEqual("You bowled a strike!");
  })

  it("should allow the player two bowls within the same frame and observe the score", function() {
    player.bowl(9);
    player.bowl(5);
    expect(player.displayFrameScore()).toEqual("You bowled out 14 pins in this frame");
  })

  it("should allow the player to see which frame they are in", function() {
    for (i = 0; i < 4; i++) {
      player.bowl(9);
    }
    expect(player.displayFrame()).toEqual("You are currently in frame 2");
  })

})
