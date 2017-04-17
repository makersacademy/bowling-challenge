'use strict';

xdescribe('Feature Tests', function(){

  var testName = "Rick"
  var normalThrowScore = 4

  describe('Scenario: Regular Frame', function(){


    it('logs correct score for a frame of regular throws',function(){
      var thrower = new Thrower();
      var frameTerminator = new FrameTerminator();
      var frame  = new FrameHandler(thrower, frameTerminator);

      spyOn(frame,'_throwBall').and.returnValue(normalThrowScore);
      frame.startFrame();
      frame.startRound();
      expect(frame.result.throw1).toEqual(normalThrowScore);
      frame.startRound();
      expect(frame.result.throw2).toEqual(normalThrowScore);

    })
  });

  describe('Scenario: User plays a game of normal throws ',function(){
  });


  describe('Context: Frame 10', function(){
    describe('Returns the correct results for a three strike game',function(){
      it('handles a three strike game',function(){

        var thrower = new Thrower;
        spyOn(thrower, 'throw').and.returnValue(10)
        var frameTerminator = new FrameTerminator;
        var frameHandler = new FrameHandler(thrower,frameTerminator);
        frameHandler.framesPlayed = 9;

        var game = new Game(frameHandler);

        game.framesPlayed = 9
        game.playBowling();
        game.playBowling();
        game.playBowling();
        expect(game.results[0].throw1).toEqual(10);
        expect(game.results[1].throw1).toEqual(10);
        expect(game.results[2].throw1).toEqual(10);


      });

    });

  });

  describe('pefect game', function(){
    it('is the pefect game',function(){
      var thrower = new Thrower;
      spyOn(thrower, 'throw').and.returnValue(10)
      var frameTerminator = new FrameTerminator;
      var frameHandler = new FrameHandler(thrower,frameTerminator);
      var game = new Game(frameHandler);

      for (var i = 0; i < 13; i++) {
        game.playBowling();
      }

    });
  });

  describe('spares game', function(){
    it('is the pefect game',function(){
      var thrower = new Thrower;
      spyOn(thrower, 'throw').and.returnValue(5)
      var frameTerminator = new FrameTerminator;
      var frameHandler = new FrameHandler(thrower,frameTerminator);
      var game = new Game(frameHandler);

      for (var i = 0; i < 6; i++) {
        game.playBowling();
      }
    });
  });

  describe('gutter game', function(){
    it('is the pefect game',function(){
      var thrower = new Thrower;
      spyOn(thrower, 'throw').and.returnValue(0)
      var frameTerminator = new FrameTerminator;
      var frameHandler = new FrameHandler(thrower,frameTerminator);
      var game = new Game(frameHandler);

      for (var i = 0; i < 20; i++) {
        game.playBowling();
      }

    });
  });
});
