describe('feature-test', function(){
  var game;
  var frame;
  var spare;
  var strike;
  var finalF1;
  var finalF2;
  var unluckyframe;

  beforeEach(function(){
    game = new Game();
    frame = new Frame();
    spare = new Frame();
      spare.firstRoll(5);
      spare.secondRoll(5);
    strike = new Frame();
      strike.firstRoll(10);
    finalF1 = new FinalFrame();
      finalF1.firstRoll(10);
      finalF1.secondRoll(10);
      finalF1.bonusRoll(10);
    finalF2 = new FinalFrame();
      finalF2.firstRoll(0);
      finalF2.secondRoll(0);

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


  describe('calculates the final score for the game', function(){
    it('perfect game', function(){
      for(var i=0; i<9; i++) {
        perfectframe = new Frame();
        perfectframe.firstRoll(10);
        game.addFrame(perfectframe);
      }
      game.addFrame(finalF1);
      game.sharingInfoWithFrames();
      game.getFramesScores();
      // console.log(game.frames[9].totalFrameScore())
      // console.log(game.framesScores())
      expect(game.finalScore()).toEqual(300);
    });

    it('super unlucky game', function(){
      for(var i=0; i<9; i++) {
        unluckyframe = new Frame();
          unluckyframe.firstRoll(0);
          unluckyframe.secondRoll(0);
          game.addFrame(unluckyframe);
      }
      game.addFrame(finalF2);
      game.sharingInfoWithFrames();
      game.getFramesScores();
      expect(game.finalScore()).toEqual(0);
    });

    it('extra example with spare frames', function(){
      for(var i=0; i<9; i++) {
        var localspare = new Frame();
        localspare.firstRoll(5);
        localspare.secondRoll(5);
        //console.log(localspare);
        game.addFrame(localspare);
      }
      //console.log(game)
      game.addFrame(finalF1);
      game.sharingInfoWithFrames();
      game.getFramesScores();
      //console.log(game.framesScores());
      expect(game.finalScore()).toEqual(170);
    });

    it('extra example with normal frames', function(){
      for(var i=0; i<9; i++) {
        var localframe = new Frame()
        localframe.firstRoll(2);
        localframe.secondRoll(3);
        //console.log(localspare);
        game.addFrame(localframe);
      }
      //console.log(game)
      game.addFrame(finalF1);
      game.sharingInfoWithFrames();
      game.getFramesScores();
      //console.log(game.framesScores());
      expect(game.finalScore()).toEqual(75);
    });


  });
});


// game = new Game()
// frame1 = new Frame()
// frame1.firstRoll(10)
// frame2 = new Frame()
// frame2.firstRoll(10)
// frame3 = new Frame()
// frame3.firstRoll(10)
// frame4 = new Frame()
// frame4.firstRoll(10)
// frame5 = new Frame()
// frame5.firstRoll(10)
// frame6 = new Frame()
// frame6.firstRoll(10)
// frame7 = new Frame()
// frame7.firstRoll(10)
// frame8 = new Frame()
// frame8.firstRoll(10)
// frame9 = new Frame()
// frame9.firstRoll(10)
// frame10 = new FinalFrame()
// frame10.firstRoll(10)
// frame10.secondRoll(10)
// frame10.bonusRoll(10)
// game.addFrame(frame1)
// game.addFrame(frame2)
// game.addFrame(frame3)
// game.addFrame(frame4)
// game.addFrame(frame5)
// game.addFrame(frame6)
// game.addFrame(frame7)
// game.addFrame(frame8)
// game.addFrame(frame9)
// game.addFrame(frame10)
// game.sharingInfoWithFrames()
// game.getFramesScores()
//
//
// game = new Game()
// frame1 = new Frame()
// frame1.firstRoll(5)
// frame1.secondRoll(5)
// frame2 = new Frame()
// frame2.firstRoll(5)
// frame2.secondRoll(5)
// frame3 = new Frame()
// frame3.firstRoll(5)
// frame3.secondRoll(5)
// frame4 = new Frame()
// frame4.firstRoll(5)
// frame4.secondRoll(5)
// frame5 = new Frame()
// frame5.firstRoll(5)
// frame5.secondRoll(5)
// frame6 = new Frame()
// frame6.firstRoll(5)
// frame6.secondRoll(5)
// frame7 = new Frame()
// frame7.firstRoll(5)
// frame7.secondRoll(5)
// frame8 = new Frame()
// frame8.firstRoll(5)
// frame8.secondRoll(5)
// frame9 = new Frame()
// frame9.firstRoll(5)
// frame9.secondRoll(5)
// frame10 = new FinalFrame()
// frame10.firstRoll(10)
// frame10.secondRoll(10)
// frame10.bonusRoll(10)
// game.addFrame(frame1)
// game.addFrame(frame2)
// game.addFrame(frame3)
// game.addFrame(frame4)
// game.addFrame(frame5)
// game.addFrame(frame6)
// game.addFrame(frame7)
// game.addFrame(frame8)
// game.addFrame(frame9)
// game.addFrame(frame10)
// game.sharingInfoWithFrames()
// game.getFramesScores()
