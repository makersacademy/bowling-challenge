describe("Player", function() {
  var playerOne;

  beforeEach(function() {
     playerOne = new Player("steve");
  })
  it(" should be able to store the player name", function() {
    expect(playerOne.name).toEqual("steve");
  });

  it(" should be able to store the player's bowls", function() {
    expect(playerOne.bowls).toEqual([]);
  });
  it(" should be able to add the first and second bowls for a frame to the player's bowls", () => {
    playerOne.addFrame(2,7)
    expect(playerOne.bowls).toEqual([2,7]);
  });


});