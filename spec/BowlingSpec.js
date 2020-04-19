describe("Bowling", function() {
  var bowling,
      playerOne,
      playerTwo;

  beforeEach(function() {
    bowling = new Bowling();
    playerOne = "Tom";
    playerTwo = "Alex";
  });

  it(" should hae a list of players", function() {
    expect(bowling.players).toEqual([]);
  });

  it(" should be able to save a player's name to the list of players", function() {
    bowling.addPlayer(playerOne);
    console.log(bowling.players)
    expect(bowling.players[0]).toEqual(playerOne);
  });

  it(" should be able to tell me the current player pt1", function() {
    bowling.addPlayer(playerOne);
    bowling.addPlayer(playerTwo);
    expect(bowling.getCurrentPlayer()).toEqual(playerOne);
  });

});
