describe('Testing', function(){
  it('when 22 strikes and a score under 10', function(){
    var scorecard = new Scorecard();
    scorecard.bowl(10, 0)
    scorecard.bowl(10, 0)
    scorecard.bowl(6, 3)
    expect(scorecard.showScore()).toEqual(54);
  });
});
