describe('Scorecard', function() {

  var Scorecard;
  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it('takes a number and displays it', function() {
    expect(scorecard.recordRoll(5)).toEqual(5);
  });

});
