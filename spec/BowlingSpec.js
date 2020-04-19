describe("Bowling", function() {
  var bowling;
  var player;

  beforeEach(function() {
    bowling = new Bowling();
    player = "Tom"
  });

  it(" should hae a list of players", function() {
    expect(bowling.players).toEqual([]);
  });

  it(" should be able to save a player's name to the list of players", function() {
    bowling.addPlayer(player);
    console.log(bowling.players)
    expect(bowling.players[0]).toEqual(player);
  });

})