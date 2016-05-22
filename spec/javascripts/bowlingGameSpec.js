describe('BowlingGame', function() {

  var newGame;
  var frame1;
  var frame2;


  beforeEach(function(){
    newGame = new BowlingGame();
    frame1 = new Frame();
    frame2 = new Frame();
  });

  describe('starting a game', function() {

    it('starts a game with a total score of 0', function() {
      expect(newGame.totalScore).toEqual(0);
    });

    it('starts a game on the first frame', function() {
      expect(newGame.currentFrame()).toEqual(this.allFrames);
    });

  });

  describe('changing and storing frames', function() {

    it('adds a frame to allFrames', function(){
      newGame.addFrame(frame1);
      newGame.addFrame(frame2);
      expect(newGame.allFrames).toContain(frame1);
      expect(newGame.allFrames).toContain(frame2);
    });

    it('finds the correct current frame', function(){
      newGame.addFrame(frame1);
      newGame.addFrame(frame2);
      expect(newGame.currentFrame()).toEqual(frame2);
    });

    it('finds the correct previous frame', function(){
      newGame.addFrame(frame1);
      newGame.addFrame(frame2);
      expect(newGame.previousFrame()).toEqual(frame1);
    });

  });

  // describe('total score', function() {
  //
  //   it('changes total score with updateScore', function() {
  //     // newGame.updateScore(9);
  //     // expect(newGame.totalScore).toEqual(9);
  //   });
  //
  //   it('keeps a running total', function() {
  //
  //   });
  //
  //   it('has a final total after the last frame', function() {
  //
  //   });
  //
  // });

  // describe('frame changes with ')

});
