describe('ScoreCard', function(){

  var scoreCard, game, rollOne;

  beforeEach(function(){
    scoreCard = new ScoreCard();
    rollOne = new Roll();

    rollOne = {
      roll: function() {
        roll = 7;
      }
    }
    spyOn(rollOne, 'roll');
  });
  it('starts with an empty score', function() {
    expect(scoreCard.scoreSoFar).toEqual(0);
  });
  // it('adds rollOne score to scoreCard', function() {
  //   rollOne.roll(7);
  //   expect(scoreCard.scoreSoFar).toEqual(7);
  // });

});
