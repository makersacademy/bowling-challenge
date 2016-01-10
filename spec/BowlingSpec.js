describe("Bowling", function() {
  var bowling;
  var frame;

  beforeEach(function() {
    frame = {
      record: function() {},
      calculateScore: function() {},
      addThirdRoll: function() {}
    }
    bowling = new Bowling(frame);
  });

  describe('#frames', function() {
    it('stores the player\'s frames', function() {
      spyOn(frame, 'record');
      bowling.play(1,2);
      expect(bowling.frames).toEqual([frame]);
    });

    it('after the frame has been played, current frame is cleared', function() {
      spyOn(frame, 'calculateScore');
      bowling.calculateFrameScore();
      expect(bowling.frame.rolls).toEqual([]);
    });
  });

  describe('#totalScore', function() {
    it('gives a total score', function() {
      spyOn(frame, 'record').and.returnValue
      (frame.rolls = [1,2], frame.rolls = [3,4]);
      spyOn(frame, 'calculateScore').and.callFake(function() {
        var alreadyCalled = false;
        if(alreadyCalled) {frame.score = (3+4)}
        alreadyCalled = true;
        return frame.score = (1+2);
      });
      bowling.play(1,2);
      bowling.calculateFrameScore();
      bowling.play(3,4);
      bowling.calculateFrameScore();
      bowling.calculateTotalScore();
      expect(bowling.totalScore).toEqual(1+2+3+4);
    });
  });

  describe('#play', function() {
    it('prevents a player from playing more than 10 frames', function() {
      spyOn(frame, 'record').and.returnValue(frame.rolls = [1,5]);
      var i = 0;
      for(i=0; i<10; i++) {
        bowling.play(1,5);
        bowling.calculateFrameScore();
      }
      expect(function(){bowling.play(1,5);}).toThrow
      (new Error("You have already played 10 frames."));
    });
  });

  describe('#thirdRoll', function() {
    it('allows a player to play a third roll in the 10th frame if they have' +
    ' scored a strike', function() {
      spyOn(frame, 'record').and.returnValue(frame.rolls = [10,0,5]);
      var i = 0;
      for(i=0; i<9; i++) {
        bowling.play(1,2);
        bowling.calculateFrameScore();
      }
      bowling.play(10,0);
      bowling.thirdRoll(5);
      bowling.calculateFrameScore();
      expect(bowling.frames[bowling.frames.length-1].rolls[2]).toEqual(5);
    });

    it('allows a player to play a third roll in the 10th frame if they have' +
    ' scored a spare', function() {
      spyOn(frame, 'record').and.returnValue(frame.rolls = [3,7,5]);
      var i =0
      for(i=0; i<9; i++) {
        bowling.play(1,2);
        bowling.calculateFrameScore();
      }
      bowling.play(3,7);
      bowling.thirdRoll(5);
      bowling.calculateFrameScore();
      expect(bowling.frames[bowling.frames.length-1].rolls[2]).toEqual(5);
    });

    it('throws an error if player attempts 3rd roll if not in' +
    ' 10th frame', function() {
      expect(function(){bowling.thirdRoll();}).toThrow
      (new Error ('Cannot play 3rd roll: this is not the 10th frame'));
    });

    it('throws an error if player attempts 3rd roll and has not scored' +
    ' a spare or strike', function() {
      spyOn(frame, 'record').and.returnValue(frame.rolls = [1,2]);
      var i=0
      for(i=0; i<10; i++) {
        bowling.play(1,2);
        bowling.calculateFrameScore();
      }
      expect(function(){bowling.thirdRoll();}).toThrow(new Error
        ('Cannot play 3rd roll: you have not scored a spare or strike'));
    });
  });

  describe('#checkBonus', function() {
    it('allows a player to get a bonus if they score a strike', function() {
      spyOn(frame, 'record').and.returnValue(frame.rolls = [10,0]);
      spyOn(frame, 'calculateScore');
      bowling.play(10,0);
      bowling.calculateFrameScore();
      bowling.play(1,2);
      expect(bowling.frames[0].bonus).toEqual(3);
    });

    it('allows a player to get a bonus if they score a spare', function() {
      spyOn(frame, 'record').and.returnValue(frame.rolls = [7,3]);
      spyOn(frame, 'calculateScore').and.returnValue(frame.score=(7+3));
      bowling.play(7,3);
      bowling.calculateFrameScore();
      bowling.play(1,2);
      expect(bowling.frames[0].bonus).toEqual(1);
    });
  });
});
