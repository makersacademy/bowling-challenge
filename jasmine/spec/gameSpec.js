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
    bowlingGame.addToFrame(10);
    var frame = bowlingGame.frame();
    expect(bowlingGame.IsAStrike(frame)).toBe(true);
  });

  it('should decide if two rolls is a spare', function(){
    bowlingGame.addToFrame(8);
    bowlingGame.addToFrame(2);
    var frame = bowlingGame.frame();
    expect(bowlingGame.IsASpare(frame)).toBe(true);
  });


  it('should add a frame with valid scores to game record', function(){
    bowlingGame.addToFrame(2);
    bowlingGame.addToFrame(8);
    var frame = bowlingGame.frame();
    expect(bowlingGame.game()).toEqual([[2, 8]]);
  });



});
