describe("scorecard", function() {
	var scorecard;

	beforeEach(function() {
    scorecard = new Scorecard();
  });

  it ("A new scorecard should start empty", function() {
  	expect(scorecard.roll_number).toEqual(null);
  	expect(scorecard.frame_number).toEqual(null);
  	expect(scorecard.current_frame_score).toEqual(null);
  	expect(scorecard.previous_frame_score).toEqual(null);
  	expect(scorecard.running_total).toEqual(null);
  	expect(scorecard.spare).toEqual(false);
  	expect(scorecard.strike).toEqual(false);
  });
});


