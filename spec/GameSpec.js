describe('Game', function() {

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

  it('should calculate a perfect game score', function() {
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    expect(game.totalScore).toEqual(300);
  });

  it('should calculate a game score 1', function() {
    frame.bowl(10);
    frame.bowl(5);
    frame.bowl(5);
    frame.bowl(10);
    frame.bowl(3);
    frame.bowl(4);
    frame.bowl(2);
    frame.bowl(3);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(5);
    expect(game.totalScore).toEqual(214);
  });

  it('should calculate a game score 2', function() {
    frame.bowl(10);
    frame.bowl(5);
    frame.bowl(5);
    frame.bowl(10);
    frame.bowl(3);
    frame.bowl(4);
    frame.bowl(2);
    frame.bowl(3);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(2);
    frame.bowl(8);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(5);
    expect(game.totalScore).toEqual(186);
  });

  it('should calculate a game score 3', function() {
    frame.bowl(10);
    frame.bowl(5);
    frame.bowl(5);
    frame.bowl(10);
    frame.bowl(3);
    frame.bowl(4);
    frame.bowl(2);
    frame.bowl(3);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(2);
    frame.bowl(8);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(5);
    expect(game.totalScore).toEqual(186);
  });

  it('should calculate a game score 4', function() {
    frame.bowl(5);
    frame.bowl(3);
    frame.bowl(8);
    frame.bowl(1);
    frame.bowl(6);
    frame.bowl(4);
    frame.bowl(5);
    frame.bowl(4);
    frame.bowl(0);
    frame.bowl(9);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(6);
    frame.bowl(4);
    frame.bowl(6);
    frame.bowl(3);
    frame.bowl(7);
    frame.bowl(3);
    frame.bowl(4);
    expect(game.totalScore).toEqual(135);
  });

  it('should calculate a game score 5', function() {
    frame.bowl(5);
    frame.bowl(5);
    frame.bowl(10);
    frame.bowl(4);
    frame.bowl(6);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(4);
    frame.bowl(0);
    frame.bowl(0);
    frame.bowl(9);
    frame.bowl(10);
    frame.bowl(6);
    frame.bowl(4);
    frame.bowl(6);
    frame.bowl(4);
    frame.bowl(7);
    expect(game.totalScore).toEqual(164);
  });

  it('should calculate a game score 6', function() {
    frame.bowl(5);
    frame.bowl(5);
    frame.bowl(10);
    frame.bowl(4);
    frame.bowl(6);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(4);
    frame.bowl(0);
    frame.bowl(0);
    frame.bowl(9);
    frame.bowl(6);
    frame.bowl(4);
    frame.bowl(6);
    frame.bowl(4);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    expect(game.totalScore).toEqual(177);
  });

  it('should calculate a game score 7', function() {
    frame.bowl(7);
    frame.bowl(2);
    frame.bowl(6);
    frame.bowl(3);
    frame.bowl(10);
    frame.bowl(6);
    frame.bowl(4);
    frame.bowl(2);
    frame.bowl(7);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(4);
    frame.bowl(3);
    frame.bowl(7);
    frame.bowl(3);
    frame.bowl(10);
    frame.bowl(7);
    frame.bowl(3);
    expect(game.totalScore).toEqual(147);
  });

  it('should calculate a game score 8', function() {
    frame.bowl(7);
    frame.bowl(3);
    frame.bowl(6);
    frame.bowl(4);
    frame.bowl(10);
    frame.bowl(6);
    frame.bowl(4);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(10);
    frame.bowl(7);
    frame.bowl(3);
    frame.bowl(10);
    frame.bowl(7);
    frame.bowl(3);
    expect(game.totalScore).toEqual(223);
  });

  it('should calculate a game score 8', function() {
    frame.bowl(5);
    frame.bowl(4);
    frame.bowl(3);
    frame.bowl(4);
    frame.bowl(4);
    frame.bowl(3);
    frame.bowl(10);
    frame.bowl(6);
    frame.bowl(4);
    frame.bowl(8);
    frame.bowl(2);
    frame.bowl(1);
    frame.bowl(2);
    frame.bowl(4);
    frame.bowl(4);
    frame.bowl(10);
    frame.bowl(6);
    frame.bowl(4);
    frame.bowl(10);
    expect(game.totalScore).toEqual(123);
  });

});
