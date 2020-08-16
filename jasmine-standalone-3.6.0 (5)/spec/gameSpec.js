'use strict'

describe("Frame ", function() {
  var frame;
  var scorecard;

//   Enter each roll.
// ----------------

// As a bowler, 
// So I can keep track of my score,
// I was a scoreboard that calculates the number of pins I knocked down at each roll.

  describe('a single roll', function(){
    beforeEach(function() {
      frame = new Frame();
      frame.enterFirstRollScore();
      frame.enterSecondRollScore()
      // scorecard = jasmine.createSpyObj('scorecard', ['captureFrame']);
    });

    it('displays score for a single roll', function(){
      frame.enterFirstRollScore(3);
      expect(frame.firstRollScore).toEqual(3);
    });


  it('displays score from second roll', function(){
    
   frame.enterSecondRollScore(2);
    expect(frame.secondRollScore).toEqual(2);
});

//   Calculate frame score.
// ----------------
// As a bowler, 
// So I can calculate my score for each frame,
// I want to see the total score for each frame for pins I have knocked out (not strike/10 down
  it ('can only score 10 or less', function(){
    var i;
    for(i=0; i<10; i++){
      frame.displays(11);
    }
    expect(frame.totalScorePerFrame).toEqual('ERROR- ABOVE 10');
    });
  });


  it('has a max of 10 in each frame except the last', function(){
      frame.enterFirstRollScore(2)
      frame.enterSecondRollScore(3);
      frame.add(2,3)
    expect(frame.add).toEqual(5)
  })

//if the score typed in is greater that 10, error shows but if now, continue playing
  // it('adds score of first annd second roll to frame total', function(){

  //   frame.enterFirstRollScore(3, scorecard); 
  //   frame.enterSecondRollScore(2, scorecard);
  //   frame.calculateTotalScore(3,2);
  //   expect(frame.addTotalScore).toEqual(5);
  //   expect(frame.addTotalScore).toEqual(2);
  // });


//   it('adds total of frame to scorecard', function(){
//      expect(scorecard.captureFrame).toHaveBeenCalledWith(frame);
//   });

//   describe('when score is invalid', function(){
//     it('replies with error message', function(){
//       expect(function(){ frame.enterFirstRollScore(11) }).toThrow(
//        'A maximum of 10 points per frame')
      
//     })
//   })

//has been a strike
  describe('strike', function(){
    it('knows there has been a strike',function(){
      frame.enterFirstRollScore(10);
      expect(frame.strike()).toEqual(true)
    });

    it('records a no strike if player does nothit all pins at a go', function(){
      frame.enterFirstRollScore(6);
      frame.enterSecondRollScore(2);
      expect(frame.strike()).toEqual(false)
    })
  })

  })
