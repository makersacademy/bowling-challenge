describe("scorecard", function() {
	var scorecard;

	beforeEach(function() {
    scorecard = new Scorecard();
  });

  it ("A new scorecard should start ready to play", function() {
  	expect(scorecard.roll_number).toEqual(null);
  	expect(scorecard.frame_number).toEqual(1);
  	expect(scorecard.current_frame_score).toEqual(null);
  	expect(scorecard.previous_frame_score).toEqual(null);
  	expect(scorecard.running_total).toEqual(null);
  	expect(scorecard.spare).toEqual(false);
  	expect(scorecard.strike).toEqual(false);
  });

  it("A user can input a score", function() {
  	scorecard.input_score(6);
  	expect(scorecard.current_frame_score).toEqual(6);
  });

  it("Scorecard roll_number resets after 2", function(){
  	scorecard.input_score(9);
  	scorecard.input_score(0);
  	expect(scorecard.roll_number).toEqual(2);
  	scorecard.input_score(3);
  	expect(scorecard.roll_number).toEqual(1);
  });

  it("Scorecard can track frames played", function() {
  	scorecard.input_score(8);
  	scorecard.input_score(1);
  	expect(scorecard.frame_number).toEqual(2);
  });

  it("Scorecard knows when player has bowled a strike", function(){
  	scorecard.input_score(10);
  	expect(scorecard.strike).toEqual(true);
  });

  it("Scorecard knows when a player has bowled a spare", function(){
  	scorecard.input_score(9);
  	scorecard.input_score(1);
  	expect(scorecard.spare).toEqual(true);
  });

  it("Current_frame_score resets every 2 rolls", function(){
  	scorecard.input_score(7);
  	scorecard.input_score(2);
  	scorecard.input_score(6);
  	expect(scorecard.current_frame_score).toEqual(6);
  });
});


