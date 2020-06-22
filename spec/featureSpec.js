describe('feature-test', function(){
  var game;
  var frame;
  var spare;
  var strike;
  var finalF1;

  beforeEach(function(){
    game = new Game();
    frame = new Frame();
    spare = new Frame();
      spare.firstRoll(8);
      spare.secondRoll(2);
    strike = new Frame();
      strike.firstRoll(10);
    finalF1 = new FinalFrame();
      finalF1.firstRoll(10);
      finalF1.secondRoll(10);
      finalF1.bonusRoll(10);
  });
  describe('game shares info regarding next frames with every frame', function(){
    it('frame knows which are its next and next_next frames', function(){
      game.addFrame(frame);
      game.addFrame(spare);
      game.addFrame(strike);
      game.sharingInfoWithFrames();
      expect(frame.nextRoll()).toEqual(spare);
      expect(frame.nextNextRoll()).toEqual(strike);
    });
    it('spare knows which are its next and next_next frames', function(){
      game.addFrame(spare);
      game.addFrame(strike);
      game.addFrame(frame);
      game.sharingInfoWithFrames();
      expect(spare.nextRoll()).toEqual(strike);
      expect(spare.nextNextRoll()).toEqual(frame);
    });
  });

  // describe('game gets final scores for every frame', function(){
  //   it('let s try', function(){
  //   spyOn(frame, "totalFrameScore").and.returnValue(10);
  //   for(var i=0; i<3; i++) {
  //     game.addFrame(frame);
  //   }
  //   game.getFramesScores();
  //   expect(game.framesScores()).toEqual([10, 10, 10]);
  //   });
  // });


  describe('game calculates the final game score', function(){
    xit('perfect game', function(){
      for(var i=0; i<10; i++) {
        game.addFrame(strike);
      }
      game.addFrame(finalF1);
      game.sharingInfoWithFrames();
      expect(game.finalScore()).toEqual(300)
    });
  });
});
