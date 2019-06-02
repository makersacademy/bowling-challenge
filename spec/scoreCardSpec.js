// the total score is 0 if I only roll 0 pins twenty times

describe('Scorecard',function() {
  var scorecard;

  beforeEach(function() {
    scorecard = new Scorecard();
  });


  it('has ten frames',function() {
    expect(scorecard.numberOfFrames).toEqual(10);
  });

  describe('#totalScore',function() {

    it('the score starts at 0',function() {
      expect(scorecard.totalScore()).toEqual(0);
    });

    it('has a total score of 0 if player rolls 0 pins 20 times',
    function() {
      for (var i = 0; i < 20; i++) {
          scorecard.rollZero();
        }
      expect(scorecard.totalScore()).toEqual(0);
    });

    // it('has a total score of 300 if player rolls a strike 20 times',
    // function() {
    //   for (var i = 0; i < 20; i++) {
    //       scorecard.isStrike();
    //     }
    //   expect(scorecard.totalScore()).toEqual(300);
    // });


  });

});
