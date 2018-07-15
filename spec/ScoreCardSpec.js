// 'use strict';

describe('ScoreCard', function(){

  var scorecard;

  beforeEach(function(){
    scorecard = new ScoreCard();
  });

  it('adds a score to the first roll at the first frame', function(){
      scorecard.roll_1(5);
    expect(scorecard.getRoll_1()).toEqual(5);
  });

  it('should know if the first roll is a strike', function(){
      scorecard.roll_1(10);
    expect(scorecard.checkForStrike()).toEqual("strike")
  });

  it('should adds a score to the second roll if not strike', function(){
      scorecard.roll_1(5);
      scorecard.evaluateRoll_1_ForStrike();
      scorecard.roll_2(3);
    expect(scorecard.getTotalFrame()).toEqual(8)
  });


// ask for number: fill number in
// evaluate: check if number is strike...no
// ask for second number: fill in





  it('adds a score to the second roll at the first frame', function(){
      scorecard.roll_1(5);
      scorecard.roll_2(3);
    expect(scorecard.getRoll_2()).toEqual(3);
  });



  it('should know if the second roll is a spare', function(){
    scorecard.roll_1(5);
    scorecard.roll_2(5);
    expect(scorecard.checkForSpare()).toEqual("spare")
  });

  it('should know the total points of a frame', function(){
    scorecard.roll_1(3);
    scorecard.roll_2(4);
  expect(scorecard.getTotalFrame()).toEqual(7)
  });
});



// start with roll 1
//   ask for how many pins knocked down
//   save the number in frame (array)
//   if 1 till 9?
//
//     go to roll 2
//       ask for how many pins knocked down?
//       save the number in frame(array)
//       calculated the number of roll 1 and roll 2
//
//       if number is a spare?
//       add the next number from roll 1 to the array
//
//
//   if number is a strike
//       add number of the next frame to the array
// I want to add a score to the bord at the first frame
