describe('Scorecard', function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard;
  });

  it('the score starts at 0', function() {
    expect(scorecard.score).toBe(0);
  });

  it('you can roll twice and the score will change', function() {
    scorecard.rolls(3, 4);
    expect(scorecard.score).toEqual(7);
  });

  it('score a strike if first roll is 10', function() {
    scorecard.rolls(10, 0);
    expect(scorecard.isStrike).toBeTruthy();
  });

  it('has a bonus score if a strike is scored', function() {
    scorecard.rolls(10, 0);
    scorecard.rolls(5, 3);
    expect(scorecard.strikeBonus).toEqual(8)
  });

  it('score a spare is rolls equal 10', function() {
    scorecard.rolls(4, 6);
    expect(scorecard.isSpare).toBeTruthy();
  });

  // it('has a bonus score if a spare is scored', function() {
  //   scorecard.rolls(6, 4);
  //   scorecard.rolls(5, 3);
  //   expect(scorecard.spareBonus).toEqual(5)
  // });

  it('resets current frame with each new roll', function ()  {
    scorecard.rolls(3, 4);
    scorecard.rolls(5, 2);
    expect(scorecard.currentFrame[0]).toEqual(5);
  });

  it('ends game after 10 frames', function () {
    scorecard.frameCounter = 10
    expect(scorecard.endGame).toBeTruthy();
  });

  it('is a gutter game if the player never scores', function () {
    scorecard.rolls(0, 0);
    expect(scorecard.isGutter).toBeTruthy();
  });

  it('is a perfect game if the player scores 300', function () {
    scorecard.score = 300
    expect(scorecard.isPerfect).toBeTruthy();
  });

});
