describe("Player", function() {
  it(" should be able to store the player name", function() {
    var playerOne = new Player("steve");
    expect(playerOne.name).toEqual("steve");
  });
});