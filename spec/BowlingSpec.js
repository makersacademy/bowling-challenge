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

  it(" should be able to tell me the current player on the first turn", function() {
    bowling.addPlayer(playerOne);
    bowling.addPlayer(playerTwo);
    expect(bowling.getCurrentPlayer()).toEqual(playerOne);
  });

  it(" should be able to change the turn", function() {
    bowling.addPlayer(playerOne);
    bowling.addPlayer(playerTwo);
    bowling.changeTurn();
    expect(bowling.getCurrentPlayer()).toEqual(playerTwo);
  });

  it(" should be able to tell me when we are in the first frame", function() {
    bowling.addPlayer(playerOne);
    bowling.addPlayer(playerTwo);
    bowling.changeTurn();
    expect(bowling.getCurrentFrame()).toEqual(1);
  });

  it(" should be able to increment the frame once every player has had their turn", function() {
    bowling.addPlayer(playerOne);
    bowling.addPlayer(playerTwo);
    bowling.changeTurn();
    bowling.changeTurn();
    expect(bowling.getCurrentFrame()).toEqual(2);
  });
});
