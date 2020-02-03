
describe('Scorecard', function() {

  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard;
  });

  it('should allow the user to input the number of pins knocked down in a roll and keep track of score', function() {
    scorecard.pins(10);
    expect(scorecard.card[0]).toEqual([10])
  });

  it('should start on frame 1', function() {
    expect(scorecard.current_frame).toEqual(1)
  });

  it('should go to the second frame after a strike', function() {
    scorecard.pins(10);
    expect(scorecard.current_frame).toEqual(2)
  });

  it('should go to the second frame after two shots', function() {
    scorecard.pins(4);
    scorecard.pins(4);
    expect(scorecard.current_frame).toEqual(2)
  });

  it('should place the scores in the array by frame', function() {
    scorecard.pins(1);
    scorecard.pins(1);
    scorecard.pins(2);
    scorecard.pins(2);
    expect(scorecard.card[1]).toEqual([2, 2])
  });

  it('should start with strike and spare bonuses disabled', function() {
    expect(scorecard.strike_bonus).toBe(false)
    expect(scorecard.spare_bonus).toBe(false)
  });

  it('should enable the strike bonus if you get a strike', function() {
    scorecard.pins(10);
    expect(scorecard.strike_bonus).toBe(true)
  });

  it('should enable the spare bonus if you get a spare', function() {
    scorecard.pins(5);
    scorecard.pins(5);
    expect(scorecard.spare_bonus).toBe(true)
  });

  it('should add points to the previous score on a bonus round', function() {
    scorecard.pins(5);
    scorecard.pins(5);
    scorecard.pins(6);
    expect(scorecard.card[0][2]).toEqual(6) // Bonus points in that frame should be 5
  });

  it('should reset the spare bonus after giving one bonus set of points', function() {
    scorecard.pins(5);
    scorecard.pins(5);
    scorecard.pins(6);
    expect(scorecard.spare_bonus).toBe(false)
  });

  it('should add the next two scores as bonus scores for a strike round', function() {
    scorecard.pins(10);
    scorecard.pins(1);
    scorecard.pins(1);
    expect(scorecard.card[0]).toEqual([10, 1, 1])
  });

  it('should end the game after 10 frames', function() {
    for (var i = 0; i < 21; i++) {
      scorecard.pins(4);
    }
    expect(scorecard.final_score).toEqual(80)
  });



});
