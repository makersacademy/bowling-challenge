describe('Scorecard', function() {
  var scorecard;

  beforeEach(function(){
    scorecard = new Scorecard();
  });


  it('starts a bowling game with a score of 0', function(){
    expect(scorecard.score).toEqual(0);
  });

  it('starts a bowling game with no frames played', function(){
    expect(scorecard.score).toEqual(0)
  });


  it("can add a frame", function(){
      scorecard.addFrame({});
      expect(scorecard.frames).toEqual([{}]);
    });

    it("has a limit of 10 frames", function(){
      for(var i = 0; i < 10; i ++) {
        var frame = new Frame;
        scorecard.addFrame(frame);
      };
      expect(scorecard.gameOver()).toEqual(true);
    });

   // it("can calculate a total of a series of frames", function(){
    //   scorecard.addFrame(frameDouble);
    //   scorecard.addFrame(frameDouble);
    //   expect(scorecard.total()).toEqual(8);
    // });

  // // it('can add the scores to the scorecard', function(){
  // //   expect(bowling.score).toContain(8);
  // // });


  // it(' adds the score from the next frame after bowling a strike', function(){
  //   var bowling = new Bowling();
  //   bowling.strike(10);
  //   expect(bowling.score).toEqual(10)
  // });

  // it('can bowl a spare', function(){
  //   var bowling = new Bowling();
  //   bowling.bowl(5);
  //   bowling.bowl(5);
  //   expect(bowling.score).toEqual(10)

  // });


});




