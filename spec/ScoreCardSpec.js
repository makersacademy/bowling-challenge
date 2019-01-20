describe("ScoreCard", function() {
  var scorecard;

    beforeEach(function() {
      scorecard = new ScoreCard();
    });

it("should have a score of zero after 20 gutters", function(){
  for(var i = 0; i < 20; i++){
    scorecard.roll(0);
  }
  expect(scorecard.getTotal()).toEqual(0);
});


it("should be able to roll all ones", function(){
  for(var i = 0; i < 20; i++){
    scorecard.roll(1);
  }
  expect(scorecard.getTotal()).toEqual(20);
});

it("can roll a spare", function(){
  scorecard.roll(3);
  scorecard.ro
})




// it("can roll a perfect game", function(){
//   for(var i = 0; i < 12; i++){
//     scorecard.roll(10);
//   }
//   expect(scorecard.getTotal()).toEqual(300);
// });

});