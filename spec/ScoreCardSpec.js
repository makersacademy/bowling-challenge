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

  it('adds a score to the second roll at the first frame', function(){
      scorecard.roll_1(5);
      scorecard.roll_2(3);
    expect(scorecard.getRoll_2()).toEqual(3);

  });

});
//
// User story 1
// As an score-manager
// So i can keep on eye on the score
// I want to add a score to the second roll at the first frame'
//
//
//
//
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
