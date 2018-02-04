describe('Game', function() {
  var game, frame, roll;

  beforeEach(function() {
    game = new Game();
    frameScore = [];

    roll = new Roll();
  });
  it('begins a new frame', function() {
    expect(frame).toEqual(frame);
  });
  it('is empty before frame is called', function(){
      expect(frameScore).toEqual([]);
  });
  it('accepts scores for the frame', function(){
    roll.roll(3);
    expect(this.scores).not.toEqual([]);
  });

  it('starts a new game', function(){
      expect(game).toEqual(game)
  });
  it('is empty before game starts', function(){
      expect(game.frames).toEqual([]);
  });

  it('returns my score', function() {
    roll.roll(7);
    expect(roll.frameScore).toEqual([7, false]);
  });
  it('bowls a STRIKE (10 points in 1 ball)', function(){
    roll.roll(10);
    expect(roll.isStrike).toEqual(true);
  });
  it('bowls a SPARE (10 points in 2 balls)', function(){
    roll.roll(4);
    roll.rollTwo(6);
    expect(roll.isSpare).toEqual(true);
  });

});
