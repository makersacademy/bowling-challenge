describe("Score Bowling - general frames", function() {
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

describe("Score Bowling - When bonus (strike/spare) is incurred", function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling_score();
  });

  it('Update strike frame score on completion of next frame (non-bonus)', function () {
    bowling.process_roll(10)
    expect(bowling.game_results[0].round_score).toEqual(0)
    bowling.process_roll(3)
    bowling.process_roll(4)
    expect(bowling.game_results[0].round_score).toEqual(17)
    expect(bowling.score).toEqual(24)
  });

  it('Two strikes in row does not update score', function () {
    bowling.process_roll(10)
    bowling.process_roll(10)
    expect(bowling.score).toEqual(0)
  });

  it('Three strikes will set first frame to 30', function () {
    bowling.process_roll(10)
    bowling.process_roll(10)
    bowling.process_roll(10)
    expect(bowling.game_results[0].round_score).toEqual(30)
    expect(bowling.score).toEqual(30)
  });

  it('Spare will update on completing next frame with no bonus', function () {
    bowling.process_roll(4)
    bowling.process_roll(6)
    bowling.process_roll(4)
    bowling.process_roll(3)
    expect(bowling.game_results[0].round_score).toEqual(14)
    expect(bowling.score).toEqual(21)
  });

});

describe("Score Bowling - 10th round", function() {
  var bowling;

  beforeEach(function() {
    bowling = new Bowling_score();
    for (var i=0; i < 10; i++ ) {
      bowling.process_roll(10)
    }
  });

  it('Will give a score of 300 on consistent strikes', function () {
    bowling.process_roll(10)
    bowling.process_roll(10)
    expect(bowling.score).toEqual(300)
  });

});
