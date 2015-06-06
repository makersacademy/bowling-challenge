describe('Scorecard', function(){
  var scorecard;
  var frameDouble;
  var spareDouble;



   beforeEach(function() {
   scorecard = new Scorecard();
   frameDouble = {
    bothRolls: [3, 3],
    totalFrameScore : function() { return 6 },
    frameSpare : function() { return false },
    frameStrike : function() { return false }
   }
   spareDouble = {
    bothRolls: [0, 10],
    totalFrameScore : function() { return 10},
    frameSpare : function() { return true },
    frameStrike : function() { return false }
   }
   strikeDouble = {
    bothRolls: [10],
    totalFrameScore : function() { return 10},
    frameSpare : function() { return false },
    frameStrike : function() { return true }
   }
   });

  it('can contain a frame', function(){
    scorecard.addFrame({});
    expect(scorecard.allFrames).toEqual([{}]);
  });

  it('can calculate a total of frames without a bonus', function(){
    scorecard.addFrame(frameDouble);
    scorecard.addFrame(frameDouble);
    expect(scorecard.totalScore()).toEqual(12);
  });

  it('can identify a spare', function(){
    scorecard.addFrame(spareDouble);
    expect(scorecard.isItSpare(0)).toEqual(true);
  });

  it('can identify a strike', function(){
    scorecard.addFrame(strikeDouble);
    expect(scorecard.isItStrike(0)).toEqual(true);
  });

});


