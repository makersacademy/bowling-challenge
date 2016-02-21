describe('Scorecard - Inputs from balls one and two', function (){

  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard ();
  });

  it('does not allow a score of higher than 10 or less than 0 to be entered for #ballOne', function(){
    expect( function() {scorecard.ballOne(11);} ).toThrow(new Error("Errrm, no. I think you might want to check those figures again..."));
    expect( function() {scorecard.ballOne(-1);} ).toThrow(new Error("Errrm, no. I think you might want to check those figures again..."));
  });

  it('checks if the score is final before accepting a score for #ballOne', function(){
    scorecard.scoreIsFinal = true;
    expect( function() {scorecard.ballOne(8);} ).toThrow(new Error("The game is over!"));
  });

  it('correctly assesses if the first ball is a strike', function(){
    scorecard.ballOne(10);
    expect(scorecard.lastFrameStrike).toBe(true);
  });

  it('correctly assesses if the first ball is not a strike', function(){
    scorecard.ballOne(6);
    expect(scorecard.lastFrameStrike).toBe(false);
  });

  it('does not allow a score less than 0 or totalling of higher than 10  when added to ball one to be entered for #ballTwo', function(){
    expect( function() {scorecard.ballTwo(0, 11);} ).toThrow(new Error("Errrm, no. I think you might want to check those figures again..."));
    expect( function() {scorecard.ballTwo(10, -1);} ).toThrow(new Error("Errrm, no. I think you might want to check those figures again..."));
    expect( function() {scorecard.ballTwo(6, 5);} ).toThrow(new Error("Errrm, no. I think you might want to check those figures again..."));
  });

  it('correctly assesses if the player has bowled a spare', function(){
    scorecard.ballTwo(6, 4);
    expect(scorecard.lastFrameSpare).toBe(true);
  });

  it('correctly assesses if the player has not bowled a spare', function(){
    scorecard.ballTwo(6, 3);
    expect(scorecard.lastFrameSpare).toBe(false);
  });


});
