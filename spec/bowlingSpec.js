 describe ('Bowling', function () {
  var bowling;
  beforeEach(function(){
    bowling = new Bowling();
  });

  it('tracks Bowls (0)', function() {
    expect(bowling.getCurrentBowl()).toEqual(0)
  });

  it('tracks Bowls (2)', function() {
    bowling.bowl(2)
    bowling.bowl(2)
    expect(bowling.getCurrentBowl()).toEqual(2)
  });

  it('tracks Bowls (4)', function() {
    bowling.bowl(2)
    bowling.bowl(2)
    bowling.bowl(10)
    expect(bowling.getCurrentBowl()).toEqual(4)
  });

  it('gets a frame score', function() {
    bowling.bowl(5)
    bowling.bowl(3)
    expect(bowling.getFrameScore(1)).toEqual(8)
  });

  it('gets a frame 2 score', function() {
    bowling.bowl(5)
    bowling.bowl(3)
    bowling.bowl(4)
    bowling.bowl(3)
    expect(bowling.getFrameScore(2)).toEqual(7)
  });

  it('gets a frame 3 score', function() {
    bowling.bowl(5)
    bowling.bowl(3)
    bowling.bowl(4)
    bowling.bowl(4)
    bowling.bowl(4)
    bowling.bowl(3)
    expect(bowling.getFrameScore(3)).toEqual(7)
  });

  it('spare - gets a frame 1 score of 18', function() {
    bowling.bowl(6)
    bowling.bowl(4)
    bowling.bowl(8)
    expect(bowling.getFrameScore(1)).toEqual(18)
  });

  it('spare - gets a frame 2 score of 14', function() {
    bowling.bowl(5)
    bowling.bowl(3)
    bowling.bowl(6)
    bowling.bowl(4)
    bowling.bowl(4)
    bowling.bowl(3)
    expect(bowling.getFrameScore(2)).toEqual(14)
  });

  it('strike - gets a frame 1 score of 17', function() {
    bowling.bowl(10)
    bowling.bowl(4)
    bowling.bowl(3)
    expect(bowling.getFrameScore(1)).toEqual(17)
  });

  it('strike - gets a frame 2 score of 27', function() {
    bowling.bowl(3)
    bowling.bowl(4)
    bowling.bowl(10)
    bowling.bowl(10)
    bowling.bowl(7)
    expect(bowling.getFrameScore(2)).toEqual(27)
  });

  it('strike - gets a frame 1 score of 30', function() {
    bowling.bowl(10)
    bowling.bowl(10)
    bowling.bowl(10)
    expect(bowling.getFrameScore(1)).toEqual(30)
  });

  it('strike - gets a frame 2 score of 30', function() {
    bowling.bowl(10)
    bowling.bowl(10)
    bowling.bowl(10)
    bowling.bowl(10)
    expect(bowling.getFrameScore(2)).toEqual(30)
  });

  it('strike - gets a frame 2 score of 17', function() {
    bowling.bowl(5)
    bowling.bowl(3)
    bowling.bowl(10)
    bowling.bowl(4)
    bowling.bowl(3)
    expect(bowling.getFrameScore(2)).toEqual(17)
  });

  it('strike - gets a frame 5 score of 17', function() {
    bowling.bowl(5)
    bowling.bowl(3)
    bowling.bowl(5)
    bowling.bowl(3)
    bowling.bowl(10)
    bowling.bowl(4)
    bowling.bowl(3)
    bowling.bowl(10)
    bowling.bowl(4)
    bowling.bowl(3)
    expect(bowling.getFrameScore(5)).toEqual(17)
  });

  it('The perfect games', function() {
    bowling.bowl(10)
    bowling.bowl(10)
    bowling.bowl(10)
    bowling.bowl(10)
    bowling.bowl(10)
    bowling.bowl(10)
    bowling.bowl(10)
    bowling.bowl(10)
    bowling.bowl(10)
    bowling.bowl(10)
    bowling.bowl(10)
    bowling.bowl(10)
    expect(bowling.getTotalScore()).toEqual(300)
  });

  it('The total score of 94', function() {
    bowling.bowl(2)
    bowling.bowl(2)
    bowling.bowl(3)
    bowling.bowl(4)
    bowling.bowl(5)
    bowling.bowl(5)
    bowling.bowl(6)
    bowling.bowl(4)
    bowling.bowl(7)
    bowling.bowl(2)
    bowling.bowl(10)
    bowling.bowl(3)
    bowling.bowl(2)
    bowling.bowl(3)
    bowling.bowl(4)
    bowling.bowl(5)
    bowling.bowl(3)
    bowling.bowl(3)
    bowling.bowl(3)
    expect(bowling.getTotalScore()).toEqual(94)
  });

  it('Testing all frame scores', function() {
    bowling.bowl(2)
    bowling.bowl(2)
    bowling.bowl(3)
    bowling.bowl(4)
    bowling.bowl(5)
    bowling.bowl(5)
    bowling.bowl(6)
    bowling.bowl(4)
    bowling.bowl(7)
    bowling.bowl(2)
    bowling.bowl(10)
    bowling.bowl(3)
    bowling.bowl(2)
    bowling.bowl(3)
    bowling.bowl(4)
    bowling.bowl(5)
    bowling.bowl(3)
    bowling.bowl(3)
    bowling.bowl(3)
    expect(bowling.getFrameScore(1)).toEqual(4)
    expect(bowling.getFrameScore(2)).toEqual(7)
    expect(bowling.getFrameScore(3)).toEqual(16)
    expect(bowling.getFrameScore(4)).toEqual(17)
    expect(bowling.getFrameScore(5)).toEqual(9)
    expect(bowling.getFrameScore(6)).toEqual(15)
    expect(bowling.getFrameScore(7)).toEqual(5)
    expect(bowling.getFrameScore(8)).toEqual(7)
    expect(bowling.getFrameScore(9)).toEqual(8)
    expect(bowling.getFrameScore(10)).toEqual(6)
  });
});
