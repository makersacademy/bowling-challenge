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
});
