describe('Bowlingcard', function() {
  var bowlingcard;
})

describe('.enterScore', function() {
  it('records the users score', function() {
    bowlingcard = new Bowlingcard();
    bowlingcard.enterScore(5);
    expect(bowlingcard.score).toBe(5);
  });
});