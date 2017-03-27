describe('Game', function() {

 var game

 beforeEach(function() {
  game = new Game();
  frame = new Frame();
 });

  it('can keep a score count', function() {
    expect(game.score).toEqual(0);
  });

  it('can only have ten frames', function() {
    for (var i=0; i < 20; i++) {
      game.bowl();
    };
    expect(game.bowl()).toEqual("Game Over");
  });

  it('each frame consists of a maximum of two rolls', function() {
    for (var i=0; i < 2; i++) {
      game.bowl();
    };
    expect(game.frames.length).toEqual(1);

  });

  it('the max number of pins that can be knocked down is ten', function() {
    game.bowl();
    expect(game.currentResult).toBeLessThan(11);
  });

  it('the pins are reset after every frame', function() {
    expect(new Frame().pins).toEqual(10);
  });


  describe('Strikes', function() {

    it('reports "strike" if ten pins are knocked down on the first roll', function() {
      expect(frame.updateScore(10)).toEqual("Strike");
    });

    it('ends the frame if a strike is bowled on the first go', function() {
      frame.updateScore(10);
      expect(frame.isFrameComplete()).toEqual(true);
    });

    it('adds a bonus score for a strike', function() {

    });

  });


  describe('Spares', function() {

    it('reports a "spare" if ten pins are knocked down after the second roll', function() {
      frame.updateScore(6);
      expect(frame.updateScore(4)).toEqual("Spare");
    });

    it('adds a bonus score for a spare', function() {

    });

  });

  describe('the 10th frame', function() {

    it('calculates the bonus for a strike in the 10th frame', function() {

    });

    it('calculates the bonus for a spare in the 10th frame', function() {

    });

    it('player cannot roll more than three times in the 10th frame', function() {

    });

  });

  describe('gutter game', function() {

    it('the gutter game scores zero points', function() {

    });

  });

  describe('the perfect game', function() {

    it('the perfect game scores 300 points', function() {

    });

  });

});
