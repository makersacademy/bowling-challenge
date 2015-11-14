describe('bowlingGame', function(){
  var bowlingGame;

  beforeEach(function() {
    bowlingGame = new BowlingGame();
  });

  it ('intialises a new game', function(){
    bowlingGame.newGame();
    expect(bowlingGame.getScore()).toEqual(0);
    expect(bowlingGame.getFrame()).toEqual(1);
    expect(bowlingGame.getBowlsRemaining()).toEqual(2);
    expect(bowlingGame.getBonusBalls()).toEqual(0);
    expect(bowlingGame.getPinsStanding()).toEqual(10);
  });

});