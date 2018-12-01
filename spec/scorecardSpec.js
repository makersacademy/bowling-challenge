describe("scorecard", function() {
	var scorecard;

	beforeEach(function() {
    scorecard = new Scorecard();
  });
	it ("A new scorecard should start ready to play", function() {
  	expect(scorecard.roll_number).toEqual(null);
  	expect(scorecard.frame_number).toEqual(0);
  	expect(scorecard.current_frame_score).toEqual(null);
  	expect(scorecard.previous_frame_score).toEqual(null);
  	expect(scorecard.running_total).toEqual(null);
  	expect(scorecard.spare).toEqual(false);
  	expect(scorecard.strike).toEqual(false);
  });

  it("A user can input a score", function() {
  	scorecard.calculate_score(6, 2);
  	expect(scorecard.frame_score[0].score).toEqual(8);
  });

  it("Scorecard can track frames played", function() {
  	scorecard.calculate_score(8, 1);
  	expect(scorecard.frame_number).toEqual(1);
  });

	it("Scorecard knows when player has bowled a strike", function(){
  	scorecard.calculate_score(10, 0);
  	expect(scorecard.frame_score[0].is_strike).toEqual(true);
  });

  it("Scorecard knows when a player has bowled a spare", function(){
  	scorecard.calculate_score(9, 1);
  	expect(scorecard.frame_score[0].is_spare).toEqual(true);
  });

  describe("Calculating score", function(){
  	it("Player bowls a strike", function(){
  		scorecard.calculate_score(10, 0);
  		scorecard.calculate_score(6, 3);
  		expect(scorecard.frame_score[0].score).toEqual(19);
  	});
  });
});

describe("Frame", function(){
	var frame

	beforeEach(function() {
    frame = new Frame();
  });

  it("Should have roll attributes", function(){
  	expect(frame.first_roll).toEqual(null);
  	expect(frame.second_roll).toEqual(null);
  });
});