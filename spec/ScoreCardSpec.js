describe("ScoreCard", function() {
  var scorecard;

    beforeEach(function() {
      scorecard = new ScoreCard();
      frame = new Frame();
    });

it ("should have a score of zero after 20 gutters", function(){
  for(var i = 0; i < 20; i++){
    scorecard.roll(0);
  }
  expect(scorecard.total).toEqual(0);
});

it("")
});