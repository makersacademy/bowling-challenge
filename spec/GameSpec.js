describe('Frame', function() {

  beforeEach(function() {
    frame = new Frame();
    game = new Game();
  });

  it('should recieve frames', function() {
    frame.bowl(3);
    frame.bowl(3);
    expect(game.gameArray.length).toEqual(1);
  });

  it('should be able to tell if previous frame was a strike', function() {
    frame.bowl(10);
    expect(game.isStrike()).toEqual(true);
  });

  it('should be able to tell if previous frame was a spare', function() {
    frame.bowl(3);
    frame.bowl(7);
    expect(game.isSpare()).toEqual(true);
  });

  it('should be able to tell what the previous frame was', function() {
    frame.bowl(5);
    frame.bowl(4);
    expect(game.previousFrame()).toEqual([5,4]);
  });

  it('should calculate the score', function() {
    frame.bowl(5);
    frame.bowl(4);
    expect(game.totalScore).toEqual(9);
  });
});
