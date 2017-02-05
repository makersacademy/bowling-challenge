describe('Scorecard', function(){

  beforeEach(function(){
    scorecard = new Scorecard();
  });

  it('Allows user to input name', function(){
    scorecard.playerName('Ada');
    expect(scorecard.playerName).toEqual('Ada');
  });

  it('Creates new empty scorecard', function(){
    expect(scorecard.score).toEqual([]);
  });

  it('Allows user to input score for first frame', function(){
    scorecard.addScore(7, 3);
    expect(scorecard.score).toEqual([[7, 3]]);
  });

  it('Moves to next frame on input of score', function(){
    scorecard.addScore(7, 3);
    expect(scorecard.frame).toEqual(2);
  });

  it('Calculates and returns running total', function(){
    scorecard.addScore(7, 3);
    expect(scorecard.totalScore).toEqual(10);
  });

  it('Errors if frame total is above 10', function(){
    expect(function() { scorecard.addScore(4, 8) }).toThrow('Cannot exceed 10.');
  });

  it('User cannot enter score for >10 frames', function(){
    scorecard.frame = 11
    expect(function() { scorecard.addScore(4, 5) }).toThrow('Game ended.');
  });

  it('When strike is bowled, double next frame score as bonus', function(){
    scorecard.addScore(10, 0);
    scorecard.addScore(7, 3);
    expect(scorecard.totalScore).toEqual(30);
  });

  it('When a spare is bowled, adds next frame 1st roll as bonus', function(){
    scorecard.addScore(7, 3);
    scorecard.addScore(7, 3);
    expect(scorecard.totalScore).toEqual(27);
  });
});

// Next: calculating and adding bonuses
// If loop: if item[0] of previous frame was 10 add total of current frame twice
// if sum of previous frame was 10 (i.e. last item in score array == 10)
// add item[0] of current frame
// Special circumstances for 10th frame (perhaps add extra field
// in JQuery later)

// User can visit the home page which displays welcome message;
// Get to a page which has instructions for how to use it
// User can input their name and have it displayed on the page
// Program displays instructions, the number of the frame and
// roll the user is on
// When user inputs a score and clicks Submit, it doesn't error
// and the page now displays their score
// later create input fields for scores which connect to frameScore
// and table which updates each section of table with scores
// rely on honesty for now
// later add automatic moving on function if first roll of frame is 10
// Can I use JQuery just to update the most recent piece of code
// and leave the rest alone,
// i.e. use one iterative function to add each frame score up to number 10
// using the same variables?
