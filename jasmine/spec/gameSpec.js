describe('BowlingGame', function() {
  var bowlingGame;

  beforeEach(function() {
    bowlingGame = new BowlingGame();
  });

  it('starts game with all frames empty', function() {
    var game = bowlingGame.game();
    expect(game.length).toEqual(0);
  });

  it('allows score keeper to add number of pins knocked to a frame', function() {
    bowlingGame.addToFrame(8);
    expect(bowlingGame.frame()).toEqual([8]);
  });

  it('should decide if a roll is a strike', function(){
    expect(bowlingGame.IsAStrike([10])).toBe(true);
  });

  it('should decide if two rolls is a spare', function(){
    expect(bowlingGame.IsASpare([8, 2])).toBe(true);
  });

  it('should add a frame with valid scores to game record', function(){
    bowlingGame.addToFrame(2);
    bowlingGame.addToFrame(8);
    var frame = bowlingGame.frame();
    expect(bowlingGame.game()).toEqual([[2, 8]]);
  });

  it('should throw an error if score keeper add frame score of greater than 10 to game in the first nine games', function(){
    bowlingGame.addToFrame(2);
    expect(function() {bowlingGame.addToFrame(9)}).toThrow(new Error("There is only 8 pins left"));
  });

  it ('should reset frame to empty after adding frame scores to game', function() {
    bowlingGame.addToFrame(2);
    bowlingGame.addToFrame(8);
    expect(bowlingGame.frame()).toEqual([]);
  });

  it ('should have a different set of rules in the final frame', function() {
    for (i = 1; i < 10; i++){
      bowlingGame.addToFrame(5);
      bowlingGame.addToFrame(3);
    }
    bowlingGame.addToFrame(5);
    bowlingGame.addToFrame(5);
    bowlingGame.addToFrame(5);
    expect(bowlingGame.game()[9]).toEqual([5, 5, 5]);
  });

  it ('should have a different set of rules in the final frame for double strike', function() {
    for (i = 1; i < 10; i++){
      bowlingGame.addToFrame(5);
      bowlingGame.addToFrame(3);
    }
    bowlingGame.addToFrame(10);
    bowlingGame.addToFrame(10);
    bowlingGame.addToFrame(5);
    expect(bowlingGame.game()[9]).toEqual([10, 10, 5]);
  });


});
