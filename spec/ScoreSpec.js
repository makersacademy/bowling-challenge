describe('Score', function() {

  var score;
  var game;

  beforeEach(function(done) {
    game = new Game();
    score = new Score();
    game.throwFirstBall(5);
    game.throwSecondBall(3);
    done();
  });

  it('sums up score for the first frame', function(done) {
    score._calculateScore(game._frames);
    expect(score._currentScore).toBe(game._frames[0][0] + game._frames[0][1]);
    done();
  });

  it('sums up score for the second frame', function(done) {
    game.throwFirstBall(5);
    game.throwSecondBall(3);
    score._calculateScore(game._frames);
    expect(score._currentScore).toBe(16);
    done();
  });

  it('sums up score for the third frame', function(done) {
    game.throwFirstBall(5);
    game.throwSecondBall(3);
    game.throwFirstBall(6);
    game.throwSecondBall(2);
    score._calculateScore(game._frames);
    expect(score._currentScore).toBe(24);
    done();
  });

  describe('spareScore', function() {

    var score;
    var game;

    it('counts spare bonus', function(done) {
      game = new Game();
      score = new Score();
      game.throwFirstBall(9);
      game.throwSecondBall(1);
      game.throwFirstBall(4);
      game.throwSecondBall(3);
      score._calculateScore(game._frames);
      expect(score._currentScore).toBe(21);
      done();
    });

    it('counts spare bonus when there is a double spare', function(done) {
      game = new Game();
      score = new Score();
      game.throwFirstBall(9);
      game.throwSecondBall(1);
      game.throwFirstBall(9);
      game.throwSecondBall(1);
      game.throwFirstBall(4);
      game.throwSecondBall(3);
      score._calculateScore(game._frames);
      expect(score._currentScore).toBe(40);
      done();
    });
  });

  describe('strikeScore', function() {

    var score;
    var game;

    it('counts strike bonus', function(done) {
      game = new Game();
      score = new Score();
      game.throwFirstBall(10);
      game.throwSecondBall(0);
      game.throwFirstBall(4);
      game.throwSecondBall(3);
      score._calculateScore(game._frames);
      expect(score._currentScore).toBe(24);
      done();
    });

    it('counts strike followed by strike bonus', function(done) {
      game = new Game();
      score = new Score();
      game.throwFirstBall(10);
      game.throwSecondBall(0);
      game.throwFirstBall(10);
      game.throwSecondBall(0);
      game.throwFirstBall(4);
      game.throwSecondBall(3);
      score._calculateScore(game._frames);
      expect(score._currentScore).toBe(44);
      done();
    });
  });

  it('counts strike, spare, normal', function(done) {
    game = new Game();
    score = new Score();
    game.throwFirstBall(10);
    game.throwSecondBall(0);
    game.throwFirstBall(9);
    game.throwSecondBall(1);
    game.throwFirstBall(4);
    game.throwSecondBall(3);
    score._calculateScore(game._frames);
    expect(score._currentScore).toBe(41);
    done();
  });
});
