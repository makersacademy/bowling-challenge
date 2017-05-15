describe("Score Bowling", function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling_score();
  });

  it('Adds to score when roll two non-bonus rolls in a frame (3 and 5)', function () {
    bowling.process_roll(3)
    bowling.process_roll(3)
    expect(bowling.score).toEqual(6)
  });

  it('Does not increase score strike roll', function () {
    bowling.process_roll(10)
    expect(bowling.score).toEqual(0)
  });

  it('Does not increase score spare frame', function () {
    bowling.process_roll(7)
    bowling.process_roll(3)
    expect(bowling.score).toEqual(0)
  });

  it('Increases score after each non bonus frame', function () {
    for (var i=0; i < 5; i++ ) {
      bowling.process_roll(3)
    }
    expect(bowling.score).toEqual(12)
  });

});
