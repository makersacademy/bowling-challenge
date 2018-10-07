describe('The Frame', function() {
  var frame;
  beforeEach(function() {
    frame = new Frame;
    game = jasmine.createSpyObj('game', ['setScore']);
    game.setScore();
  })
  it('have a holding place for ball1 and ball2', function() {
    expect(frame.balls[0]).toEqual(null);
    expect(frame.balls[1]).toEqual(null);
  });

  it('can update ball1', function() {
    frame.addBallScore(0, 6);
    expect(frame.balls[0]).toEqual(6);
  });

  it('can update ball2', function() {
    frame.addBallScore(1, 4);
    expect(frame.balls[1]).toEqual(4);
  });

  it("returns true when total is 10 or below",function() {
    frame.addBallScore(0, 6);
    frame.addBallScore(1, 3);
    expect(frame.validateBallTotal()).toEqual(true);
  });

  it("returns false when total is above 10",function() {
    frame.addBallScore(0, 6);
    frame.addBallScore(1, 6);
    expect(frame.validateBallTotal()).toEqual(false);
  });

  it('throws error if trying to enter an invalid score', function() {
    frame.addBallScore(0, 6);
    frame.addBallScore(1, 6);
    expect(function(){frame.addFrameToGame()}).toThrow("Not a valid score");
  });

  it('passes information if ball scores are acceptable', function() {
    frame.addBallScore(0, 6);
    frame.addBallScore(1, 3);
    frame.addFrameToGame();
    expect(game.setScore).toHaveBeenCalledWith(6,3);
  });

  it('cannot add a score when null is present', function() {
    frame.addBallScore(0, 6);
    expect(function(){frame.addFrameToGame()}).toThrow("Both scores must be present");
  })

  it('can be reset', function() {
    frame.addBallScore(0, 6);
    frame.addBallScore(1, 3);
    frame.addFrameToGame();
    expect(frame.balls).toEqual([null,null]);
  })

})
