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
   secondSpareDouble = {
    bothRolls: [4, 6],
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

  it('can identify a spare', function(){
    scorecard.addFrame(spareDouble);
    expect(scorecard.isItSpare(0)).toEqual(true);
  });

  it('can identify a strike', function(){
    scorecard.addFrame(strikeDouble);
    expect(scorecard.isItStrike(0)).toEqual(true);
  });

  it('checks if next frame is a strike',function(){
    scorecard.addFrame(strikeDouble);
    scorecard.addFrame(strikeDouble);
    expect(scorecard.nextIsStrike(0)).toEqual(true);
  })

  it('can calculalate a spare bonus', function(){
    scorecard.addFrame(spareDouble);
    scorecard.addFrame(frameDouble);
    expect(scorecard.spareBonus(0)).toEqual(3);
  });

  it('can calculate a single strike bonus', function(){
    scorecard.addFrame(strikeDouble);
    scorecard.addFrame(frameDouble);
    expect(scorecard.strikeBonus(0)).toEqual(6);
  });

  it('can calculate a double strike bonus', function(){
    scorecard.addFrame(strikeDouble);
    scorecard.addFrame(strikeDouble);
    scorecard.addFrame(frameDouble);
    expect(scorecard.strikeBonus(0)).toEqual(13);
  });

  it('can calculate a total score without a bonus', function(){
    scorecard.addFrame(frameDouble);
    scorecard.addFrame(frameDouble);
    expect(scorecard.totalScore()).toEqual(12);
  });

  it('can calculate a total score with spare bonus', function(){
    scorecard.addFrame(spareDouble);
    scorecard.addFrame(frameDouble);
    expect(scorecard.totalScore()).toEqual(19);
  });

  it('can calculate a total score with single strike bonus', function(){
    scorecard.addFrame(strikeDouble);
    scorecard.addFrame(frameDouble);
    expect(scorecard.totalScore()).toEqual(22);
  });

  it('can calculate a total score with double strike bonus', function(){
    scorecard.addFrame(strikeDouble);
    scorecard.addFrame(strikeDouble);
    scorecard.addFrame(frameDouble);
    expect(scorecard.totalScore()).toEqual(45);
  });

  it('can calculate a total score with combination of spare[0, 10] and double strike bonus', function(){
    scorecard.addFrame(strikeDouble);
    scorecard.addFrame(strikeDouble);
    scorecard.addFrame(spareDouble);
    scorecard.addFrame(frameDouble);
    expect(scorecard.totalScore()).toEqual(59);
  });

  it('can calculate a total score with combination of spare[0, 10], spare[4, 6] and double strike bonuses', function(){
    scorecard.addFrame(spareDouble);
    scorecard.addFrame(strikeDouble);
    scorecard.addFrame(strikeDouble);
    scorecard.addFrame(secondSpareDouble);
    scorecard.addFrame(frameDouble);
    expect(scorecard.totalScore()).toEqual(83);

  });

});


