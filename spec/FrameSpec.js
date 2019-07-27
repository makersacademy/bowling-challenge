describe('Frame', function() {
  beforeEach(function(){
    frame = new Frame();
  });

  it('Roll starts at 1', function() {
    expect(frame._roll).toEqual(1);
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

  it('Ends frame if player scores strike', function() {
    frame.addPoints(10);
    expect(frame._frameOver).toEqual(true);
  });

});

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
