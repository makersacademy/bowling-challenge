'use strict';

describe('ScoreCard', function(){

  var scorecard;

  beforeEach(function(){
    scorecard = new ScoreCard();
  });


  it('should start with the first frame', function(){
    expect(scorecard.getFrameNumber()).toEqual(1)
  });


  it('should move to the next frame', function(){
    scorecard.nextFrame();
    expect(scorecard.getFrameNumber()).toEqual(2);
  });


  it('should get the previous frame', function(){
    scorecard.nextFrame();
    expect(scorecard.getPreviousFrame()).toEqual(1);
  });


  it('starts on the first roll', function(){
    expect(scorecard.getRollNumber()).toEqual(1);
  });


  it('should change the roll number', function(){
    scorecard.changeRollNumber();
    expect(scorecard.getRollNumber()).toEqual(2);
  });



it('scoreboard start at an empty object', function(){
  expect(scorecard.getBoard()).toEqual({});
});


it('should add a score to the first roll and added to the scoreboard', function(){
  scorecard.addRoll(5);
  expect(scorecard.getBoard()).toEqual({1: [5, undefined]});
});

it('should add a 4 to the second roll and added to the scoreboard', function(){
  scorecard.board = {1: [3, undefined]};
  scorecard.changeRollNumber();
  scorecard.addRoll(4);
  expect(scorecard.getBoard()).toEqual({1: [3, 4]});
});



it('should change the roll number when add first roll',  function(){
  scorecard.addRoll(5);
  expect(scorecard.getRollNumber()).toEqual(2);
});

it('should change the frameNumber and previousFrame when adding a second roll', function(){
  scorecard.board = {1: [3, undefined]};
  scorecard.changeRollNumber();
  scorecard.addRoll(3);
  expect(scorecard.getPreviousFrame()).toEqual(1);
  expect(scorecard.getFrameNumber()).toEqual(2);
});


it('should go to the next frame if strike', function(){
  scorecard.addRoll(10);
  expect(scorecard.getFrameNumber()).toEqual(2);
  expect(scorecard.getBoard()).toEqual({1: [10, undefined]});
});



it('should know if a previous frame is a spare', function(){
  scorecard.addRoll(5);
  scorecard.addRoll(5);
  expect(scorecard.previousFrameIsSpare()).toBe(true);
});








  it('scoreboard starts with an empty array', function(){
    expect(scorecard.getScoreBoard()).toEqual({})
  });



  it('adds a score to the first roll', function(){
      scorecard.roll_1(5);
    expect(scorecard.getRoll_1()).toEqual(5);
  });

  it('should know if the first roll is a strike', function(){
      scorecard.roll_1(10);
    expect(scorecard.checkForStrike()).toEqual("strike")
  });




// --------

  it('should go to the next frame when hit a strike', function(){
      scorecard.roll_1(10);
      expect(scorecard.getNextFrame()).toEqual(2);
  });


// --------


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
