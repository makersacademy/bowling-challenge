describe("Scorecard", function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });

  it('player starts on frame 1', function() {
    expect(scorecard.currentFrameNumber).toEqual(1);
  });

  it('has ten frames', function() {
    expect(scorecard.MAXNumberOfFrames).toEqual(10);
  });

  it('does not have bonus score available by default', function() {
    expect(scorecard.bonusScoreAvailable).toEqual(false);
  });

  it('sets the bonus points to zero', function() {
    expect(scorecard.bonusScorePoints).toEqual(0);
  });

  describe('#endFrame', function() {

    it('switches isFrameActive to false', function() {
      scorecard.endFrame();
      expect(scorecard.isFrameActive).toBeFalsy();
    });

    it('enters the frame into the overall scoreboard', function() {
      scorecard.endFrame();
      expect(scorecard.totalFrames.length).toEqual(1);
    });
  });


  describe('#enterRoll', function() {

    it('records the scores from the roll in current frame', function() {
      scorecard.enterRoll(2);
      scorecard.enterRoll(6);
      expect(scorecard.currentFrameRolls.length).toEqual(2);
    });

    it('will not enter more than two rolls per frame', function() {
      scorecard.enterRoll(2);
      scorecard.enterRoll(6);
      scorecard.enterRoll(1);
      expect(scorecard.currentFrameRolls.length).toEqual(2);
    });

    it('ends the current frame if a player rolls a strike', function() {
      scorecard.enterRoll(10);
      expect(scorecard.currentFrameRolls.length).toEqual(1);
    });
  });

  // describe('#calculateFrame', function(){
  //
  //   it('returns score of frame',function() {
  //     scorecard.enterRoll(2);
  //     scorecard.enterRoll(6);
  //     expect(scorecard.currentFrameScore).toEqual(8);
  //   });
  // });


});



//   describe('#totalScore',function() {
//     it('the score starts at 0',function() {
//       expect(scorecard.totalScore()).toEqual(0);
//     });
//
//     it('has a total score of 0 if player rolls 0 pins 20 times',
//     function() {
//       for (var i = 0; i < 20; i++) {
//           scorecard.rollZero();
//         }
//       expect(scorecard.totalScore()).toEqual(0);
//     });
//
//   });
//
// });
