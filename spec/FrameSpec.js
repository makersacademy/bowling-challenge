describe('Frame', function() {
  beforeEach(function(){
    frame = new Frame();
  });

  it('Roll starts at 1', function() {
    expect(frame._roll).toEqual(1);
  });

  it('Returns score for frame', function() {
    expect(frame.score()).toEqual(0)
  });

  it('Score starts at 0', function() {
    expect(frame._score).toEqual(0);
  });

  it('Bonus is set to 0 by default', function() {
    expect(frame._bonus).toEqual(0);
  });

  it('Increases score by 5 when 5 points are scored in roll', function() {
    frame.addPoints(5);
    expect(frame._score).toEqual(5);
  });

  it('Moves to next roll after points for first are added', function() {
    frame.addPoints(5);
    expect(frame._roll).toEqual(2);
  });

  it('Ends frame if player scores strike (excl 10th frame)', function() {
    frame.addPoints(10);
    expect(frame.status()).toEqual(true);
  });

  it('Ends frame after second roll', function() {
    frame.addPoints(5);
    frame.addPoints(5);
    expect(frame.status()).toEqual(true);
  });
});

describe('10th Frame', function() {
  beforeEach(function() {
    frame = new Frame(10,);
  });

  it("Doesn't end frame after second roll on 10th frame", function() {
    frame._frameNumber = 10;
    frame.addPoints(5);
    frame.addPoints(5);
    expect(frame.status()).toEqual(false);
  });

  it("Doesn't end frame after strike on 10th frame", function() {
    frame._frameNumber = 10;
    frame.addPoints(10);
    expect(frame.status()).toEqual(false);
  });
})

describe('Bonus Score', function() {
  beforeEach(function(){
    frame1 = new Frame();
  });

  it('Calculates a bonus score of 10 for a strike after a spare', function() {
    frame1.addPoints(5);
    frame1.addPoints(5);
    frame2 = new Frame(frame1);
    frame2.addPoints(10);
    frame2.calculateBonus(frame1);
    expect(frame1._bonus).toEqual(10);
  });
});
