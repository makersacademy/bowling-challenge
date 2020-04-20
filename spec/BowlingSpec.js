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

  it(" should be able to save a player to the list of players", function() {
    bowling.addPlayer(playerOne);
    console.log(bowling.players)
    expect(bowling.players[0].name).toEqual(playerOne);
  });

  it(" should be able to tell me the current player on the first turn", function() {
    bowling.addPlayer(playerOne);
    bowling.addPlayer(playerTwo);
    expect(bowling.getCurrentPlayer().name).toEqual(playerOne);
  });

  it(" should be able to change the turn", function() {
    bowling.addPlayer(playerOne);
    bowling.addPlayer(playerTwo);
    bowling.changeTurn();
    expect(bowling.getCurrentPlayer().name).toEqual(playerTwo);
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

  it(" should be able to store the first bowl of the current player's frame", function() {
    bowling.addPlayer(playerOne);
    bowling.storeFirst(4);
    expect(bowling.firstBowl).toEqual(4);
  });

  it(" should be able to store the 2nd bowl of the current player's frame", function() {
    bowling.addPlayer(playerOne);
    bowling.storeFirst(4);
    bowling.storeSecond(5);
    expect(bowling.secondBowl).toEqual(5);
  });

  it("should be able to save the first and second bowls to the current player", () => {
    bowling.addPlayer(playerOne);
    bowling.storeFirst(4);
    bowling.storeSecond(5);
    bowling.saveCurrentPlayerFrame();
    expect(bowling.players[0].bowls[0]).toEqual(4);
    expect(bowling.players[0].bowls[1]).toEqual(5);
  });

  it("saving the current player's frame should wipe the bowl values ", () => {
    bowling.addPlayer(playerOne);
    bowling.storeFirst(4);
    bowling.storeSecond(5);
    bowling.saveCurrentPlayerFrame();
    expect(bowling.firstBowl).toEqual(0);
    expect(bowling.secondBowl).toEqual(0);
  });

  it("saving the current player's frame should change the turn", () => {
    bowling.addPlayer(playerOne);
    bowling.addPlayer(playerTwo);
    bowling.storeFirst(4);
    bowling.storeSecond(5);
    bowling.saveCurrentPlayerFrame();
    expect(bowling.getCurrentPlayer().name).toEqual(playerTwo);
  });
});
